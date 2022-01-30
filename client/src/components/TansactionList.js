import React from 'react';
import { GlobalContext } from '../context/GlobalState'
import { useContext } from 'react';
import { Transaction } from './Transaction';

export const TansactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
        <h3>History</h3>
        <ul className="list">
            {transactions.map(transactions => (
              <Transaction key={transactions.id} transaction={transactions} />
            ))}
        </ul>
    </>
  );
};
