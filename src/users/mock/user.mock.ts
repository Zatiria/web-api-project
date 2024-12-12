import { User } from '../dto/users.dto';
import { v4 as uuidv4 } from 'uuid';

export const mockUsersData: User[] = [
  {
    id: uuidv4(),
    name: 'Yana',
    email: 'yana1@gmail.com',
    age: 22,
  },
  {
    id: uuidv4(),
    name: 'Olena',
    email: 'olena2@gmail.com',
    age: 30,
  },
  {
    id: uuidv4(),
    name: 'Taras',
    email: 'taras3@gmail.com',
    age: 27,
  },
  {
    id: uuidv4(),
    name: 'Diana',
    email: 'diana4@gmail.com',
    age: 25,
  },
  {
    id: uuidv4(),
    name: 'Ivan',
    email: 'ivan5@gmail.com',
    age: 33,
  },
  {
    id: uuidv4(),
    name: 'Viktor',
    email: 'viktor6@gmail.com',
    age: 29,
  },
  {
    id: uuidv4(),
    name: 'Natalia',
    email: 'natalia7@gmail.com',
    age: 28,
  },
  {
    id: uuidv4(),
    name: 'Serhiy',
    email: 'serhiy8@gmail.com',
    age: 34,
  },
  {
    id: uuidv4(),
    name: 'Anna',
    email: 'anna9@gmail.com',
    age: 32,
  },
  {
    id: uuidv4(),
    name: 'Petro',
    email: 'petro10@gmail.com',
    age: 31,
  },
];
