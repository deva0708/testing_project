export const comicBooks = [
  { id: 1, name: 'Comic Book 1', pages: 100, price: 10 },
  { id: 2, name: 'Comic Book 2', pages: 120, price: 15 },
  { id: 3, name: 'Comic Book 3', pages: 130, price: 20 },
  { id: 4, name: 'Comic Book 4', pages: 140, price: 25 },
  { id: 5, name: 'Comic Book 5', pages: 499, price: 35 },
  { id: 6, name: 'Comic Book 6', pages: 300, price: 45 },
  { id: 7, name: 'Comic Book 7', pages: 567, price: 55 },
  { id: 8, name: 'Comic Book 8', pages: 546, price: 65 },
  { id: 9, name: 'Comic Book 9', pages: 912, price: 75 },
  { id: 10, name: 'Comic Book 10', pages: 543, price: 85 },
];

export const horrorBooks = [
  { id: 11, name: 'Horror Book 11', pages: 200, price: 20 },
  { id: 12, name: 'Horror Book 12', pages: 210, price: 25 },
  { id: 13, name: 'Horror Book 13', pages: 220, price: 30 },
  { id: 14, name: 'Horror Book 14', pages: 230, price: 35 },
  { id: 15, name: 'Horror Book 15', pages: 240, price: 40 },
  { id: 16, name: 'Horror Book 16', pages: 250, price: 55 },
  { id: 17, name: 'Horror Book 17', pages: 260, price: 90 },
  { id: 18, name: 'Horror Book 18', pages: 270, price: 75 },
  { id: 19, name: 'Horror Book 19', pages: 280, price: 40 },
  { id: 20, name: 'Horror Book 20', pages:410, price: 95 },
];

export const divineBooks = [
  { id: 21, name: 'Divine Book 21', pages: 310, price: 12 },
  { id: 22, name: 'Divine Book 22', pages: 320, price: 18 },
  { id: 23, name: 'Divine Book 23', pages: 330, price: 22 },
  { id: 24, name: 'Divine Book 24', pages: 340, price: 26 },
  { id: 25, name: 'Divine Book 25', pages: 350, price: 30 },
  { id: 26, name: 'Divine Book 26', pages: 360, price: 34 },
  { id: 27, name: 'Divine Book 27', pages: 370, price: 38 },
  { id: 28, name: 'Divine Book 28', pages: 380, price: 42 },
  { id: 29, name: 'Divine Book 29', pages: 390, price: 46 },
  { id: 30, name: 'Divine Book 30', pages: 400, price: 50 },
];

export const allBooks = [...comicBooks, ...horrorBooks, ...divineBooks];

export const shuffleBooks = (books) => {
  return books.sort(() => Math.random() - 0.5);
};