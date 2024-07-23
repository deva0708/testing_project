import { PURCHASE_BOOK } from './actions';

const initialState = {
  purchasedBooks: [],
};

const purchaseReducer = (state = initialState, action) => {
  switch (action.type) {
    case PURCHASE_BOOK:
      const { bookId, quantity } = action.payload;
      const purchasedBook = { bookId, quantity };
      return {
        ...state,
        purchasedBooks: [...state.purchasedBooks, purchasedBook],
      };
    default:
      return state;
  }
};

export default purchaseReducer;