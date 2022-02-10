import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { useTransactions } from '../../hooks/useTransactions';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container, TransactionTypeContainer, RadioBoxButton } from './styles';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal ( {isOpen, onRequestClose}: NewTransactionModalProps ) {
    const { createTransaction } = useTransactions();

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState(0);
    const [type, setType] = useState('deposit');
    
    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();
        
        await createTransaction({
            title,
            amount,
            category,
            type
        })

        setTitle('');
        setAmount(0);
        setCategory('');
        setType('deposit');
        
        onRequestClose();
    }
    
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            ariaHideApp={false}
        
        >
            <button type="button" className='react-modal-close'>
                <img src={closeImg} onClick={onRequestClose}/>
            </button>
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>
                
                <input 
                    placeholder='Título' 
                    value={title} 
                    onChange={event => setTitle (event.target.value)}
                />
                <input 
                    placeholder='Valor' 
                    type="number"
                    value={amount} 
                    onChange={event => setAmount (Number(event.target.value))}
                />
                
                <TransactionTypeContainer>
                    <RadioBoxButton 
                        type="button" 
                        onClick={() => {setType('deposit')}}
                        activeColor="green"
                        isActive={type == 'deposit'}//retorna verdadeiro de acordo com a expressão
                        //className={type == 'deposit ? 'active' : ''} //Poderia utilizar assim e só criar a classe "active" em styles 
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBoxButton>

                    <RadioBoxButton 
                        type="button" 
                        onClick={() => {setType('withdraw')}}
                        activeColor="red"
                        isActive={type == 'withdraw'}
                    >
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </RadioBoxButton>
                </TransactionTypeContainer>
                
                <input 
                    placeholder='Categoria'  
                    value={category} 
                    onChange={event => setCategory (event.target.value)}
                />
                
                <button type='submit'> Cadastrar </button>
            </Container>
        </Modal>
    )
}
        