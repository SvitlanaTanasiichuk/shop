import { Category, IProduct } from '../products/models/product';

export const products: IProduct[] = [
  {
    id: 1,
    name: 'From Strength to Strength',
    description: 'The roadmap for finding purpose, meaning, and success as we age, from bestselling author, Harvard professor, and the Atlantic\'s happiness columnist Arthur Brooks.',
    price: 24.84,
    category: Category.Bookshop,
    isAvailable: true,
  },
  {
    id: 2,
    name: 'The 1619 Project: A New Origin Story',
    description: '#1 NEW YORK TIMES BESTSELLER - A dramatic expansion of a groundbreaking work of journalism, The 1619 Project: A New Origin Story offers a profoundly revealing vision of the American past and present.',
    price: 38.00,
    category: Category.Bookshop,
    isAvailable: true,
  },
  {
    id: 3,
    name: 'Dirt Road Revival',
    description: 'The Democratic Party left rural America behind.\n' +
      'This urgent rallying cry shows how Democrats can win back and empower overlooked communities that have been pushing politics to the right--and why long-term progressive political power depends on it.',
    price: 22.95,
    category: Category.Bookshop,
    isAvailable: false,
  },
  {
    id: 4,
    name: 'A Book of Celtic Wisdom',
    description: 'Anam Cara is a rare synthesis of philosophy, poetry, and spirituality. This work will have a powerful and life-transforming experience for those who read it. --Deepak Chopra',
    price: 15.63,
    category: Category.Bookshop,
    isAvailable: true,
  },
]
