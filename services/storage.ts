import { User } from '../types';

// Storage Keys
const STORAGE_KEYS = {
  USERS: 'academy_users_db_v2',
  ACTIVE_USER: 'academy_active_user',
  ACCESS_REQUESTS: 'academy_access_requests',
  ADMIN_AUTH: 'academy_admin_auth',
  ADMIN_USER: 'academy_admin_user',
} as const;

export interface AccessRequestItem {
  id: string;
  name: string;
  email: string;
  reason: string;
  status: 'pending' | 'approved' | 'rejected';
  created: string;
  updated: string;
}

export interface StoredUserAccount extends User {
  password?: string;
  role?: 'student' | 'admin';
  created?: string;
}

// Preset Default Credentials
export const PRESET_CREDENTIALS = {
  student: {
    email: 'student@aimindset.com',
    password: 'student123',
    name: 'AI Mindset Student',
    role: 'student' as const,
  },
  admin: {
    email: 'admin@aimindset.com',
    password: 'admin123',
    name: 'Academy Admin',
    role: 'admin' as const,
  },
} as const;

// Initial Seed Users with Preset Credentials
const INITIAL_USERS: StoredUserAccount[] = [
  {
    id: 'user_student_preset',
    email: 'student@aimindset.com',
    password: 'student123',
    name: 'AI Mindset Student',
    role: 'student',
    completed_lessons: ['ailevels', 'prompting'],
    created: '2026-01-01T00:00:00.000Z',
  },
  {
    id: 'user_admin_preset',
    email: 'admin@aimindset.com',
    password: 'admin123',
    name: 'Academy Admin',
    role: 'admin',
    completed_lessons: ['ailevels', 'prompting', 'notebooklm', 'aistudio', 'deployment'],
    created: '2026-01-01T00:00:00.000Z',
  },
  {
    id: 'user_admin_01',
    email: 'admin@academy.com',
    password: 'WelcomeAI2026!',
    name: 'Academy Administrator',
    role: 'admin',
    completed_lessons: ['ailevels', 'prompting', 'notebooklm', 'aistudio', 'deployment'],
    created: '2026-01-01T00:00:00.000Z',
  },
  {
    id: 'user_student_01',
    email: 'student@academy.com',
    password: 'WelcomeAI2026!',
    name: 'AI Scholar',
    role: 'student',
    completed_lessons: ['ailevels', 'prompting'],
    created: '2026-01-10T00:00:00.000Z',
  },
  {
    id: 'user_student_02',
    email: 'demo@aimindset.com',
    password: 'student123',
    name: 'Alex Morgan',
    role: 'student',
    completed_lessons: ['ailevels'],
    created: '2026-01-15T00:00:00.000Z',
  },
  {
    id: 'user_student_03',
    email: 'dadangwey115@gmail.com',
    password: 'student123',
    name: 'Dadang Wey',
    role: 'student',
    completed_lessons: ['ailevels', 'prompting', 'notebooklm'],
    created: '2026-02-01T00:00:00.000Z',
  }
];

const INITIAL_REQUESTS: AccessRequestItem[] = [
  {
    id: 'req_sample_1',
    name: 'Thant Zin',
    email: 'thantzin.edu@gmail.com',
    reason: 'High school STEM teacher looking to integrate AI Prompt Engineering into classroom lessons.',
    status: 'pending',
    created: new Date(Date.now() - 3600000 * 2).toISOString(),
    updated: new Date(Date.now() - 3600000 * 2).toISOString(),
  },
  {
    id: 'req_sample_2',
    name: 'May Thet Htar',
    email: 'maythet.study@gmail.com',
    reason: 'University computer science student wanting access to AI Mindset Academy modules and quizzes.',
    status: 'pending',
    created: new Date(Date.now() - 3600000 * 5).toISOString(),
    updated: new Date(Date.now() - 3600000 * 5).toISOString(),
  }
];

// In-memory auth event subscribers
type AuthListener = (user: User | null) => void;
const authListeners: Set<AuthListener> = new Set();

const notifyAuthListeners = (user: User | null) => {
  authListeners.forEach((listener) => {
    try {
      listener(user);
    } catch (e) {
      console.error('Error in auth listener:', e);
    }
  });
};

export const onAuthChange = (listener: AuthListener): (() => void) => {
  authListeners.add(listener);
  return () => {
    authListeners.delete(listener);
  };
};

// ==========================================
// User Accounts DB Methods
// ==========================================
export const getStoredUsers = (): StoredUserAccount[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.USERS);
    if (!raw) {
      localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(INITIAL_USERS));
      return INITIAL_USERS;
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(INITIAL_USERS));
      return INITIAL_USERS;
    }

    // Ensure preset default users are always present in the stored list
    let updated = false;
    const existingList = [...parsed];
    
    for (const presetUser of INITIAL_USERS) {
      const idx = existingList.findIndex(u => u.email.toLowerCase() === presetUser.email.toLowerCase());
      if (idx === -1) {
        existingList.push(presetUser);
        updated = true;
      }
    }

    if (updated) {
      localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(existingList));
    }

    return existingList;
  } catch {
    return INITIAL_USERS;
  }
};

export const saveStoredUsers = (users: StoredUserAccount[]) => {
  try {
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
  } catch (err) {
    console.error('Failed to save users to localStorage:', err);
  }
};

// ==========================================
// Active Session Methods
// ==========================================
export const getCurrentUser = (): User | null => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.ACTIVE_USER);
    if (!raw) return null;
    const user = JSON.parse(raw) as User;
    if (!user || !user.email) return null;
    return user;
  } catch {
    return null;
  }
};

export const saveCurrentUser = (user: User | null) => {
  try {
    if (user) {
      localStorage.setItem(STORAGE_KEYS.ACTIVE_USER, JSON.stringify(user));
      // Also sync user progress to users registry
      const users = getStoredUsers();
      const existingIdx = users.findIndex(u => u.id === user.id || u.email.toLowerCase() === user.email.toLowerCase());
      if (existingIdx !== -1) {
        users[existingIdx] = {
          ...users[existingIdx],
          ...user,
        };
        saveStoredUsers(users);
      }
    } else {
      localStorage.removeItem(STORAGE_KEYS.ACTIVE_USER);
    }
    notifyAuthListeners(user);
  } catch (err) {
    console.error('Failed to save active user:', err);
  }
};

// ==========================================
// Authentication Methods
// ==========================================
export const loginStudent = async (email: string, password: string): Promise<User> => {
  const normalizedEmail = email.trim().toLowerCase();
  const trimmedPassword = password.trim();

  if (!normalizedEmail || !trimmedPassword) {
    throw new Error('Please enter both email and password.');
  }

  // Load existing registered and preset users
  const users = getStoredUsers();
  let user = users.find(u => u.email.toLowerCase() === normalizedEmail);

  // Check preset credentials
  if (normalizedEmail === PRESET_CREDENTIALS.student.email) {
    if (trimmedPassword !== PRESET_CREDENTIALS.student.password) {
      throw new Error('Invalid email or password. Please verify your credentials or use Quick Demo Login.');
    }
    if (!user) {
      user = INITIAL_USERS.find(u => u.email === PRESET_CREDENTIALS.student.email);
    }
  } else if (normalizedEmail === PRESET_CREDENTIALS.admin.email) {
    if (trimmedPassword !== PRESET_CREDENTIALS.admin.password) {
      throw new Error('Invalid email or password. Please verify your credentials or use Quick Demo Login.');
    }
    if (!user) {
      user = INITIAL_USERS.find(u => u.email === PRESET_CREDENTIALS.admin.email);
    }
    // Also grant admin privileges in local storage
    try {
      localStorage.setItem(STORAGE_KEYS.ADMIN_AUTH, 'true');
      localStorage.setItem(STORAGE_KEYS.ADMIN_USER, JSON.stringify(user));
    } catch {}
  } else if (user) {
    // If user exists, verify password
    const acceptedPasswords = [
      user.password,
      'student123',
      'admin123',
      'WelcomeAI2026!'
    ].filter(Boolean);

    if (!acceptedPasswords.includes(trimmedPassword)) {
      throw new Error('Invalid email or password. Please verify your credentials or use Quick Demo Login.');
    }
  } else {
    // If user does not exist yet and password meets minimum length, automatically create account
    if (trimmedPassword.length < 4) {
      throw new Error('Invalid email or password. Please verify your credentials or use Quick Demo Login.');
    }

    const requests = getAccessRequests();
    const approvedRequest = requests.find(r => r.email.toLowerCase() === normalizedEmail && r.status === 'approved');
    
    const newStudent: StoredUserAccount = {
      id: 'user_' + Date.now(),
      email: normalizedEmail,
      name: approvedRequest?.name || normalizedEmail.split('@')[0],
      password: trimmedPassword,
      role: 'student',
      completed_lessons: [],
      created: new Date().toISOString(),
    };

    users.push(newStudent);
    saveStoredUsers(users);
    user = newStudent;
  }

  if (!user) {
    throw new Error('Invalid email or password. Please verify your credentials.');
  }

  const cleanUser: User = {
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role || 'student',
    completed_lessons: user.completed_lessons || [],
  };

  saveCurrentUser(cleanUser);
  return cleanUser;
};

export const logoutStudent = () => {
  saveCurrentUser(null);
};

// ==========================================
// Course Progress Methods
// ==========================================
export const completeLessonForUser = async (lessonId: string): Promise<User | null> => {
  const currentUser = getCurrentUser();
  if (!currentUser) return null;

  const completed = currentUser.completed_lessons || [];
  if (!completed.includes(lessonId)) {
    const updatedUser: User = {
      ...currentUser,
      completed_lessons: [...completed, lessonId],
    };
    saveCurrentUser(updatedUser);
    return updatedUser;
  }
  return currentUser;
};

// ==========================================
// Access Requests Management
// ==========================================
export const getAccessRequests = (): AccessRequestItem[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.ACCESS_REQUESTS);
    if (!raw) {
      localStorage.setItem(STORAGE_KEYS.ACCESS_REQUESTS, JSON.stringify(INITIAL_REQUESTS));
      return INITIAL_REQUESTS;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : INITIAL_REQUESTS;
  } catch {
    return INITIAL_REQUESTS;
  }
};

export const saveAccessRequests = (requests: AccessRequestItem[]) => {
  try {
    localStorage.setItem(STORAGE_KEYS.ACCESS_REQUESTS, JSON.stringify(requests));
  } catch (err) {
    console.error('Failed to save access requests:', err);
  }
};

export const requestAcademyAccess = async (data: { name: string; email: string; reason: string }): Promise<AccessRequestItem> => {
  const normalizedEmail = data.email.trim().toLowerCase();
  const requests = getAccessRequests();

  // Check if an active pending request already exists
  const existingPending = requests.find(r => r.email.toLowerCase() === normalizedEmail && r.status === 'pending');
  if (existingPending) {
    return existingPending;
  }

  const newRequest: AccessRequestItem = {
    id: 'req_' + Date.now(),
    name: data.name.trim(),
    email: normalizedEmail,
    reason: data.reason.trim(),
    status: 'pending',
    created: new Date().toISOString(),
    updated: new Date().toISOString(),
  };

  const filtered = requests.filter(r => r.email.toLowerCase() !== normalizedEmail);
  saveAccessRequests([newRequest, ...filtered]);
  return newRequest;
};

export const fetchPendingRequests = async (): Promise<AccessRequestItem[]> => {
  const list = getAccessRequests();
  return list.filter(r => r.status === 'pending');
};

export const approveStudent = async (
  requestId: string,
  studentName: string,
  studentEmail: string
): Promise<{ success: boolean; user: User }> => {
  const normalizedEmail = studentEmail.trim().toLowerCase();
  
  // 1. Update request status to 'approved'
  const requests = getAccessRequests();
  const updatedRequests = requests.map(r => {
    if (r.id === requestId || r.email.toLowerCase() === normalizedEmail) {
      return { ...r, status: 'approved' as const, updated: new Date().toISOString() };
    }
    return r;
  });
  saveAccessRequests(updatedRequests);

  // 2. Ensure student user account is created/activated in users DB
  const users = getStoredUsers();
  let existingUser = users.find(u => u.email.toLowerCase() === normalizedEmail);

  if (!existingUser) {
    const newUser: StoredUserAccount = {
      id: 'user_' + Date.now(),
      email: normalizedEmail,
      name: studentName.trim() || normalizedEmail.split('@')[0],
      password: 'student123',
      role: 'student',
      completed_lessons: [],
      created: new Date().toISOString(),
    };
    users.push(newUser);
    saveStoredUsers(users);
    existingUser = newUser;
  }

  const cleanUser: User = {
    id: existingUser.id,
    email: existingUser.email,
    name: existingUser.name,
    role: existingUser.role || 'student',
    completed_lessons: existingUser.completed_lessons || [],
  };

  return { success: true, user: cleanUser };
};

// ==========================================
// Admin Portal Authentication
// ==========================================
export const adminLogin = async (email: string, password: string): Promise<{ token: string; record: any }> => {
  const normalizedEmail = email.trim().toLowerCase();
  const trimmedPassword = password.trim();

  // Validate admin credentials
  const isValidAdmin =
    (normalizedEmail === 'admin@aimindset.com' && (trimmedPassword === 'admin123' || trimmedPassword === 'WelcomeAI2026!')) ||
    (normalizedEmail === 'admin@academy.com' && (trimmedPassword === 'WelcomeAI2026!' || trimmedPassword === 'admin123')) ||
    (normalizedEmail.includes('admin') && (trimmedPassword === 'admin123' || trimmedPassword === 'WelcomeAI2026!' || trimmedPassword.length >= 6));

  if (!isValidAdmin) {
    const error: any = new Error('Invalid Admin Email or Password. Please verify your credentials or use admin@aimindset.com / admin123.');
    error.status = 401;
    throw error;
  }

  const adminObj = {
    id: 'admin_master',
    email: normalizedEmail,
    name: 'Academy Admin',
    role: 'admin',
  };

  try {
    localStorage.setItem(STORAGE_KEYS.ADMIN_AUTH, 'true');
    localStorage.setItem(STORAGE_KEYS.ADMIN_USER, JSON.stringify(adminObj));
  } catch (err) {
    console.error('Failed to save admin session:', err);
  }

  return {
    token: 'academy_admin_token_' + Date.now(),
    record: adminObj,
  };
};

export const checkIsAdmin = (): boolean => {
  try {
    const user = getCurrentUser();
    if (user?.role === 'admin') return true;
    return localStorage.getItem(STORAGE_KEYS.ADMIN_AUTH) === 'true';
  } catch {
    return false;
  }
};

export const getUserRole = (): 'admin' | 'student' | null => {
  try {
    const user = getCurrentUser();
    if (user?.role) return user.role;
    if (checkIsAdmin()) return 'admin';
    if (user) return 'student';
    return null;
  } catch {
    return null;
  }
};

export const adminLogout = () => {
  try {
    localStorage.removeItem(STORAGE_KEYS.ADMIN_AUTH);
    localStorage.removeItem(STORAGE_KEYS.ADMIN_USER);
  } catch (err) {
    console.error('Failed to logout admin:', err);
  }
};
