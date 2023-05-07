import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function fillDb() {
  await prisma.category.upsert({
    where: { categoryId: 1 },
    update: {},
    create: {
      title: 'Текст',
      posts: {
        create: [
          {
            title: 'lorem',
            userId: '2',
            content: 'lorem5',
            description: 'lorem10',
          },
        ],
      },
    },
  });
  console.info('🤘️ Database was filled');
}

fillDb()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();

    process.exit(1);
  });
