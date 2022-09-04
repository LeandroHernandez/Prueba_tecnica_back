import { IDocumentType } from './document-type.interface';
import { IGender } from './gender.interface';
import { IHobbie } from './hobbie.interface';
import { IPurchase } from './purchase.interface';

export interface IUser extends Document {
  id?: string;
  documentType?: IDocumentType;
  documentNumber: string;
  names: string;
  surnames: string;
  email: string;
  phoneNumber: string;
  password: string;
  username: string;
  address: string;
  position?: string;
  city: string;
  gender?: IGender;
  community?: string;
  companyWhereWork?: string;
  division: string;
  country: string;
  hobbies?: IHobbie[];
  shopping?: IPurchase[];
}
