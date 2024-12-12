import { Product } from '../dto/product.dto';
import { v4 as uuidv4 } from 'uuid';

export const mockProductsData: Product[] = [
  {
    id: uuidv4(),
    name: 'Product 1',
    price: 100,
    quantity: 100,
    discription: "Test",
  },
  {
    id: uuidv4(),
    name: 'Product 2',
    price: 200,
    quantity: 200,
    discription: "Test",
  },
  {
    id: uuidv4(),
    name: 'Product 3',
    price: 150,
    quantity: 300,
    discription: "Test",
  },
  {
    id: uuidv4(),
    name: 'Product 4',
    price: 250,
    quantity: 100,
    discription: "Test",
  },
  {
    id: uuidv4(),
    name: 'Product 5',
    price: 300,
    quantity: 200,
    discription: "Test",
  },
  {
    id: uuidv4(),
    name: 'Product 6',
    price: 120,
    quantity: 300,
    discription: "Test",
  },
  {
    id: uuidv4(),
    name: 'Product 7',
    price: 180,
    quantity: 100,
    discription: "Test",
  },
  {
    id: uuidv4(),
    name: 'Product 8',
    price: 220,
    quantity: 200,
    discription: "Test",
  },
  {
    id: uuidv4(),
    name: 'Product 9',
    price: 130,
    quantity: 300,
    discription: "Test",
  },
  {
    id: uuidv4(),
    name: 'Product 10',
    price: 170,
    quantity: 100,
    discription: "Test",
  },
];
