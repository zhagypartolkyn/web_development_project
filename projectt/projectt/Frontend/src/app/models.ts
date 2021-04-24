export interface Account {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  subscription: number;
  wishes: Array<string>;
}

export interface Comment {
  id: number;
  email: string;
  content: string;
}

export interface Payment {
  id: number;
  method: string;
  days: number;
}

export interface AuthToken {
  token: string;
}

export interface ResponseMessage {
  message: string;
}
