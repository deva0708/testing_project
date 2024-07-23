export const PURCHASE_BOOK = 'PURCHASE_BOOK';

export const purchaseBook = (bookId, quantity) => ({
  type: PURCHASE_BOOK,
  payload: { bookId, quantity },
});