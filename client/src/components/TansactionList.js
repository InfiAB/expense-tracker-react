import React from 'react';
import { GlobalContext } from '../context/GlobalState'
import { useContext, useEffect } from 'react';
import { Transaction } from './Transaction';

export const TansactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
