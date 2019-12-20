import { IUser } from 'app/shared/model/user.model';

export interface ICar {
  id?: number;
  model?: string;
  make?: string;
  mileage?: number;
  year?: number;
  price?: number;
  currency?: string;
  photoContentType?: string;
  photo?: any;
  user?: IUser;
}

export const defaultValue: Readonly<ICar> = {};
