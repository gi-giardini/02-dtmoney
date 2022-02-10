import { Container } from "./styles";
import { useTransactions } from "../../hooks/useTransactions";

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

export function Summary() {
    //Para pegar as infromações do contexto (TransactionsContext)
    const { transactions } = useTransactions();

    const summary = transactions.reduce((acc, transactions) => {
        if(transactions.type == 'deposit'){
            acc.deposit += transactions.amount
            acc.total += transactions.amount
        }else {
            acc.withdraw += transactions.amount
            acc.total -= transactions.amount
        }

        return acc;
    }, {
        deposit: 0,
        withdraw: 0,
        total: 0
    })

    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />                
                </header>
                <strong>
                    {new Intl.NumberFormat('PT-BR', {
                        style: 'currency',
                        currency: 'BRL'
                        }).format(summary.deposit)
                    }
                </strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Saídas" />                
                </header>
                <strong> - 
                    {new Intl.NumberFormat('PT-BR', {
                        style: 'currency',
                        currency: 'BRL'
                        }).format(summary.withdraw)
                    }
                </strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />                
                </header>
                <strong>
                    {new Intl.NumberFormat('PT-BR', {
                        style: 'currency',
                        currency: 'BRL'
                        }).format(summary.total)
                    }
                </strong>
            </div>
        </Container>
    );
}