const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const {seedUser, seedUser2} = require("../mock/data");

exports.handler = async (event, context, callback) => {
  try {
    await Promise.all([prisma.profile.deleteMany(), prisma.post.deleteMany()]);
    await prisma.user.deleteMany();

    const createdUser = await prisma.user.create({
      data: seedUser,
    });

    const createdUser2 = await prisma.user.create({
      data: seedUser2,
    });

    return {
      statusCode: 201,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify([createdUser, createdUser2]),
    };
  } catch (error) {
    console.error(error);
    return { statusCode: 500 };
  }
};
