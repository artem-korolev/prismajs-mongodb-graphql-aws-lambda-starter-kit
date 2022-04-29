import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    await Promise.all([prisma.profile.deleteMany(), prisma.post.deleteMany()]);
    await prisma.user.deleteMany();

    const createdUser = await prisma.user.create({
      data: seedUser,
    });

    const createdUser2 = await prisma.user.create({
      data: seedUser2,
    });

  } catch (error) {
    console.error(error);
  }

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

const seedUser = {
  email: "jane@prisma.io",
  name: "Jane",
  profile: {
    create: {
      bio: "Health Enthusiast",
    },
  },
  posts: {
    create: [
      {
        title:
          "Comparing Database Types: How Database Types Evolved to Meet Different Needs",
        body: "https://www.prisma.io/blog/comparison-of-database-models-1iz9u29nwn37/",
        slug: "slug1",
      },
      {
        title: "Analysing Sleep Patterns: The Quantified Self",
        body: "https://quantifiedself.com/get-started/",
        slug: "slug2",
      },
      {
        title: "Prisma 2 Docs",
        body: "https://www.prisma.io/docs/",
        slug: "slug3",
      },
    ],
  },
};

const seedUser2 = {
  email: "toru@prisma.io",
  name: "Toru Takemitsu",
  profile: {
    create: {
      bio: "Musician",
    },
  },
  posts: {
    create: [
      {
        title: "Requiem for String Orchestra",
        body: "",
        slug: "slug4",
      },
      {
        title: "Music of Tree",
        body: "",
        slug: "slug5",
      },
      {
        title: "Waves for clarinet, horn, two trombones and bass drum ",
        body: "",
        slug: "slug6",
      },
    ],
  },
};
