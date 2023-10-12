const { PrismaClient } = require('@prisma/client');
const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: 'Web Development' },
        { name: 'Data Science' },
        { name: 'Graphic Design' },
        { name: 'Mobile App Development' },
        { name: 'Network & Security' },
        { name: 'Databases' },
        { name: 'Business & Finance' },
        { name: 'Health & Fitness' },
        { name: 'Music Production' },
        { name: 'Photography' },
        { name: 'Marketing & SEO' },
        { name: 'Language Learning' },
        { name: 'Personal Development' },
        { name: 'Game Design & Development' },
        { name: '3D & Animation' },
        { name: 'Fashion Design' },
        { name: 'Writing & Journalism' },
        { name: 'Cooking & Baking' },
        { name: 'DIY & Crafts' },
        { name: 'Digital Art & Illustration' },
      ],
    });

    console.log('Categories seeded successfully');
  } catch (error) {
    console.log(error);
  } finally {
    await database.$disconnect();
  }
}

main();
