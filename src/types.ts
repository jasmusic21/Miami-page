export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'cocteles' | 'vapers';
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface OrderDetails {
  customerName: string;
  address: string;
  neighborhood: string;
  phone: string;
}
