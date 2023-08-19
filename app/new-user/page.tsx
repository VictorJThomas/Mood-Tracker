import { currentUser } from '@clerk/nextjs';
import { prisma } from '../utils/db';
import { redirect } from 'next/navigation';

const createNewUser = async () => {
  const user = await currentUser();

  if (user) { // Check if user is not null
    const match = await prisma.user.findUnique({
      where: {
        clerkId: user.id as string,
      },
    });

    if (!match) {
      await prisma.user.create({
        data: {
          clerkId: user.id,
          email: user?.emailAddresses[0]?.emailAddress,
        },
      });
    }
  }

  redirect('/journal');
};

const NewUser = async () => {
  await createNewUser();
  return <div>...loading</div>;
};

export default NewUser;