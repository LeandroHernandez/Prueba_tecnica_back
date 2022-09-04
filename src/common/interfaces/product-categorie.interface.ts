export interface IProductCategorie extends Document {
  id?: string;
  name: string;
  description?: string;
  subcategories?: IProductCategorie[];
}
