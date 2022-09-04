export interface IAdmin extends Document {
  id?: string;
  documentType: string;
  documentNumber: string;
  //   username: string;
  names: string;
  surnames: string;
  email: string;
  password: string;
}
