export interface User {
  email: string;
  role: "admin" | "user";
  name?: string;
  walletId?: string;
  discord?: string;
}
