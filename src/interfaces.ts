export interface User {
  userId: number
  name: string;
  surname: string;
  gender: string;
  email: string;
  password: string;
  phone: string;
  dateOfBirth: string
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface Gencount {
  name: string;
  description: string;
  gencountId: number;
  category: string;
  currency: string;
  ownerId: number;
}

export interface Expense {
  expenseId: number;
  gencountId: number;
  creditorId: number;
  creditorName: string;
  creditorSurname: string;
  title: string;
  price: number;
  description: string;
}
