export interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  img: string;
  labelText?: string;
  type?: string;
}
