export interface User {
  email: string;
  name: string;
  role: "admin" | "user";
  walletId: string;
  discord: string;
}
