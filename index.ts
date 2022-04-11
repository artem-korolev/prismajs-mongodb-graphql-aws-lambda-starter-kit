import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Connect the client
  await prisma.$connect();
  // ... you will write your Prisma Client queries here
  await prisma.user.create({
    data: {
      name: "Rich",
      email: "hello@prisma.com",
      posts: {
        create: {
          title: "My first post",
          body: "Lots of really interesting stuff",
          slug: "my-first-post",
        },
      },
    },
  });

  await prisma.post.update({
    where: {
      slug: "my-first-post",
    },
    data: {
      comments: {
        createMany: {
          data: [
            { comment: "Great post!" },
            { comment: "Can't wait to read more!" },
          ],
        },
      },
    },
  });

  const posts = await prisma.post.findMany({
    include: {
      comments: true,
    },
  });

  console.dir(posts, { depth: Infinity });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
