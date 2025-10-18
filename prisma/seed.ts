import {PrismaClient, type Prisma} from './generated/client';

const prismaClient = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    email: 'admin@example.com',
    password: 'admin',
    role: "ADMIN",
    data: {
      fullName: 'Admin User',
    },
  },
  {
    email: 'user@example.com',
    password: 'user',
    role: "USER",
    data: {
      fullName: 'Regular User',
    }
  },
];

export async function main() {
  for (const u of userData) {
    await prismaClient.user.create({data: u});
  }
}

main();
