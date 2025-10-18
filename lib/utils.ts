import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const PASSWORD = "duzbem-2vypfI-qanpew";

export const testUser = {
  email: "user@digitalandy.eu",
  password: PASSWORD,
  name: "Test User"
}

export const generateRandomUser = () => {
  const randomUsername = `user${Math.floor(Math.random() * 10000)}`;
  return {
    email: `${randomUsername}@digitalandy.eu`,
    password: PASSWORD,
    name: `User ${randomUsername}`
  }
}
