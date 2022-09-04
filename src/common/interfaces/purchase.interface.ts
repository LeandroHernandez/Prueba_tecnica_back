import { IProduct } from './product.interface';
// import { IUser } from './user.interface';

export interface IPurchase extends Document {
  id?: string;
  // client?: IUser;
  selectedProduct?: IProduct;
  amount: number;
  total: number;
}
