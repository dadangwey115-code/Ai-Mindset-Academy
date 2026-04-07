import PocketBase from 'pocketbase';

const pb = new PocketBase('https://api.mindset-it.online');
pb.autoCancellation(false);

export const requestAcademyAccess = async (data: { name: string; email: string; reason: string }) => {
  return await pb.collection('access_requests').create({
    ...data,
    status: 'pending',
  });
};

export const adminLogin = async (email: string, password: string) => {
  return await pb.admins.authWithPassword(email, password);
};

export const fetchPendingRequests = async () => {
  return await pb.collection('access_requests').getFullList({
    filter: 'status = "pending"',
    sort: '-created',
  });
};

export const approveStudent = async (requestId: string, studentName: string, studentEmail: string) => {
  const defaultPassword = 'WelcomeAI2026!';
  
  // 1. Create the user in the ai_users collection (used by AuthPage for login)
  await pb.collection('ai_users').create({
    email: studentEmail,
    password: defaultPassword,
    passwordConfirm: defaultPassword,
    name: studentName,
    emailVisibility: true,
  });

  // 2. Update the access request status to approved
  return await pb.collection('access_requests').update(requestId, {
    status: 'approved',
  });
};

export default pb;
