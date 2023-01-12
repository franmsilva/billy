import { UserCredential } from 'firebase/auth';

export declare namespace Auth {
  export interface IUser {
    uid: string;
    email: string;
  }
  export interface ILoginData {
    email: string;
    password: string;
  }
  export interface ISignUpData extends ILoginData {
    repeatPassword: string;
  }

  export interface IAuthContext {
    user: IUser | null;
    setUser: React.Dispatch<React.SetStateAction<IUser>>;
    signup: (email: string, password: string) => Promise<UserCredential>;
    login: (email: string, password: string) => Promise<UserCredential>;
    logout: () => Promise<void>;
  }
}
