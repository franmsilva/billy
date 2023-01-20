import { UserCredential } from 'firebase/auth';

export declare namespace Auth {
  export interface IUser {
    uid: string;
    email: string;
  }
  export interface IFormFields {
    email: string;
    password: string;
    repeatPassword?: string;
  }

  export interface IAuthContext {
    user: IUser | null;
    signup: (email: string, password: string) => Promise<UserCredential>;
    login: (email: string, password: string) => Promise<UserCredential>;
    logout: () => Promise<void>;
    loading: boolean;
    error: string;
    setError: React.Dispatch<React.SetStateAction<string>>;
  }
}
