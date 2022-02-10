import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";

import { useState } from 'react';

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
      setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal(){
      setIsNewTransactionModalOpen(false)
  }

  return (
    <TransactionsProvider>
      <GlobalStyle />
      
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      ></NewTransactionModal>
      
      <Dashboard />
    </ TransactionsProvider>
  );
}