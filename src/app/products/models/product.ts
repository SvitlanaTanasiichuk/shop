export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  category: Category,
  isAvailable: boolean
}

export enum Category {
  Bakery = 'Bakery',
  AntiqueShop = 'AntiqueShop',
  Bookshop = 'Bookshop',
  Boutique = 'Boutique',
  Dairy = 'Dairy',
  Drugstore = 'Drugstore'
}
