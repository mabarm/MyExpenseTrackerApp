import React, {useReducer} from 'react';
import TransactionContext from './TransactionContext';
import TransactionReducer from './TransactionReducer';
import constants from './constants';

const initialState = {
  transactions: [
    {
      id: Math.floor(Math.random() * 100000),
      amount: -1000,
      title: 'Shopping',
    },
    {
      id: Math.floor(Math.random() * 100000),
      amount: 2000,
      title: 'Interest',
    },
    {
      id: Math.floor(Math.random() * 100000),
      amount: 3000,
      title: 'Hustle',
    },
  ],
};

const TransactionHelper = props => {
  const [state, dispatch] = useReducer(TransactionReducer, initialState);

  function addTransaction(item) {
    dispatch({
      type: constants.ADD_TRANSACTION,
      payload: item,
    });
  }

  function editTransaction(item) {
    dispatch({
      type: constants.EDIT_TRANSACTION,
      payload: item,
    });
  }
  function deleteTransaction(id) {
    dispatch({
      type: constants.DELETE_TRANSACTION,
      payload: id,
    });
  }

  const TransactionValues = {
    transactions: state.transactions,
    addTransaction,
    editTransaction,
    deleteTransaction,
  };
  return (
    <TransactionContext.Provider value={TransactionValues}>
      {props.children}
    </TransactionContext.Provider>
  );
};

export default TransactionHelper;
