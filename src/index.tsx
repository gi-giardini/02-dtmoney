import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

import {createServer, Model} from 'miragejs';

/**
 * Server para simular uma api, simular o consumo de dados do backend
 */
createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelancer de Website',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2022-02-09 13:10:00')
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 1100,
          createdAt: new Date('2022-02-09 13:20:00')
        }
      ],
    })
  },
  
  routes(){
    /**
     * Api aqui é o nome na rota lá em useEffect de TransactionsTable
     */
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }

})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
