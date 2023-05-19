import {db} from '@/libs/db';
import {PROJECT_STATUS} from '@prisma/client';

const getRandomTaskStatus = () => {
  const statuses = [
    PROJECT_STATUS.COMPLETED,
    PROJECT_STATUS.NOT_STARTED,
    PROJECT_STATUS.NOT_STARTED,
  ];
  return statuses[Math.floor(Math.random() * statuses.length)];
};

async function main() {
  const user = await db.user.upsert({
    where: {email: 'user@email.com'},
    update: {},
    create: {
      email: 'user@email.com',
      name: 'user',
      projects: {
        create: new Array(5).fill(1).map((_, i) => ({
          name: `Project ${i}`,
          description: `Description of project ${i}`,
          status: getRandomTaskStatus(),
        })),
      },
    },
    include: {
      projects: true,
    },
  });

  console.log({user});
}
main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async e => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
