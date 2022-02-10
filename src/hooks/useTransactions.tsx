import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from '../services/api';

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string
}

// interface TransactionInput {
//     title: string;
//     amount: number;
//     type: string;
//     category: string;
// }

//Pega tudo o que tem em Transaction, menos os campos id e createdAt
type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionsProviderProps {
   //ReactNode indica que aceita qualquer tag do Node 
    children: ReactNode;
}

interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (transaction : TransactionInput) => Promise<void>//Promise porque é função assíncrona
}

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionsProvider( {children} : TransactionsProviderProps ) {
    const [transactions, setTransactions] = useState<Transaction[]>([])
    
    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions))
        
        // fetch('htttp://localhost:3000/api/transactions')
        //     .then(response => response.json())
        //     .then(data => console.log(data))
    }, []);

    //Função que estava em NewTransaction para cadastrar nova transação
    async function createTransaction(transactionInput : TransactionInput) {
        const response = await api.post('/transactions', {
            ...transactionInput,
            createdAt: new Date
        })
        const { transaction } = response.data

        setTransactions([
            ...transactions,
            transaction,
        ])
    }

    return (
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )
}

//Criando Hook. serve para não precisar ficar importando useContext em diversos lugares
export function useTransactions() {
    const context = useContext(TransactionsContext);

    return context;
}