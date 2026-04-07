import PocketBase from 'pocketbase';

const pb = new PocketBase('https://api.mindset-it.online');

export const requestAcademyAccess = async (data: { name: string; email: string; reason: string }) => {
  return await pb.collection('access_requests').create({
    ...data,
    status: 'pending',
  });
};

export default pb;
