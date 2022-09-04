import { IProductCategorie } from './product-categorie.interface';

export interface IProduct extends Document {
  id?: string;
  name: string;
  description?: string;
  price: string;
  categories?: IProductCategorie[];
}
