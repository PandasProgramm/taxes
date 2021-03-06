export interface Product {
  amount: number;
  name: string;
  productType: ProductType;
  imported: boolean;
  priceWithoutTax: number;
  taxPercent: number;
  tax: number;
  price: number;
}

export enum ProductType {
  BOOK = 'book',
  FOOD = 'food',
  MEDICALS = 'medical products',
  OTHER = 'Other'
}
