import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function createUser() {
  const email = "Defar@cbe.com"; // Replace with the email you want to use
  const password = "David"; // Replace with the user's password

  // Hash the password before storing it in the database
  const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

  // Create the user in the database
  const newUser = await prisma.user.create({
    data: {
      email: email,
      password: hashedPassword,
      // Optionally, you can also set the 'name' field and any other fields
      name: "Defar Gobeze", // Replace with the name if required
    },
  });

  console.log("User created: ", newUser);
}

createUser()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
