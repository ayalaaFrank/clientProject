export interface Employee {
  id: string;
  code: string;
  fullName: string;
  email?: string;
  passwordHash: string;
  phone?: string;
  isAdmin: boolean;
}