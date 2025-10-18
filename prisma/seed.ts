import {saltAndHashPassword} from "@/lib/utils/password";
import {PrismaClient, type Prisma} from '@prisma/client';

const prismaClient = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    email: 'admin@example.com',
    password: saltAndHashPassword('admin'),
  },
  {
    email: 'user@example.com',
    password: saltAndHashPassword('user'),
  },
];

export async function main() {
  for (const u of userData) {
    await prismaClient.user.create({data: u});
  }
}

main();
