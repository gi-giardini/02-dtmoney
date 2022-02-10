import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";

export function TransactionsTable() {
    const { transactions } = useTransactions();

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => {
                        return(
                            <tr key={transaction.id}>
                                <td>{transaction.title}</td>
                                <td className={transaction.type}>
                                    {/* Para formatar o valor em REAL */}
                                    {new Intl.NumberFormat('PT-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                        }).format(transaction.amount)
                                    }
                                </td>
                                <td>{transaction.category}</td>
                                <td>
                                    {new Intl.DateTimeFormat('PT-BR').format(
                                        new Date(transaction.createdAt)
                                    )}
                                </td>
                            </tr>
                        )
                    })}                   
                </tbody>
            </table>
        </Container>
    );
}