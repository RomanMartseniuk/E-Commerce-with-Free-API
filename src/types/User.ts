export interface User {
   id: number,
   name: string,
   role: "customer" | "admin",
   email: string,
   avatar: string,
}