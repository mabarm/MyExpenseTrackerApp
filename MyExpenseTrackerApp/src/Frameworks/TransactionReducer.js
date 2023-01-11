import constants from './constants';
export default (state, action) => {
  switch (action.type) {
    case constants.ADD_TRANSACTION: {
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    }

    case constants.EDIT_TRANSACTION: {
      let updatedTransaction = state.transactions.map(item => {
        return item.id === action.payload.id ? action.payload : item;
      });

      return {
        ...state,
        transactions: updatedTransaction,
      };
    }

    case constants.DELETE_TRANSACTION: {
      let updatedTransaction = state.transactions.filter(
        item => item.id !== action.payload,
      );
      return {
        ...state,
        transactions: updatedTransaction,
      };
    }

    default:
      return state;
  }
};
