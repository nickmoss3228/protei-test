import { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  createdAt: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  signup: (userData: SignupData) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
}

interface SignupData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

const API_BASE_URL = 'http://localhost:5000/api';

// Helper functions for localStorage operations (for current user session)
const getCurrentUser = (): User | null => {
  const currentUser = localStorage.getItem('currentUser');
  return currentUser ? JSON.parse(currentUser) : null;
};

const saveCurrentUser = (user: User | null) => {
  if (user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
  } else {
    localStorage.removeItem('currentUser');
  }
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try { 
      const currentUser = getCurrentUser();
      if (currentUser) {
        setUser(currentUser);
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      saveCurrentUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    try {
      setIsLoading(true);
      
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        return { success: false, error: data.error };
      }
      
      setUser(data.user);
      saveCurrentUser(data.user);
      
      return { success: true };
    } catch (error) {
      return { success: false, error: 'Ошибка сети. Попробуйте снова.' };
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (userData: SignupData): Promise<{ success: boolean; error?: string }> => {
    try {
      setIsLoading(true);
      
      const response = await fetch(`${API_BASE_URL}/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        return { success: false, error: data.error };
      }
      
      setUser(data.user);
      saveCurrentUser(data.user);
      
      return { success: true };
    } catch (error) {
      return { success: false, error: 'Ошибка сети. Попробуйте снова.' };
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    saveCurrentUser(null);
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};


// localStorage version
// import { createContext, useContext, useState, useEffect } from 'react';

// interface User {
//   id: string;
//   email: string;
//   firstName: string;
//   lastName: string;
//   createdAt: string;
// }

// interface AuthContextType {
//   user: User | null;
//   isAuthenticated: boolean;
//   isLoading: boolean;
//   login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
//   signup: (userData: SignupData) => Promise<{ success: boolean; error?: string }>;
//   logout: () => void;
// }

// interface SignupData {
//   firstName: string;
//   lastName: string;
//   email: string;
//   password: string;
// }

// interface StoredUser extends User {
//   password: string;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };

// // Helper functions for localStorage operations
// const getStoredUsers = (): StoredUser[] => {
//   const users = localStorage.getItem('users');
//   return users ? JSON.parse(users) : [];
// };

// const saveUsers = (users: StoredUser[]) => {
//   localStorage.setItem('users', JSON.stringify(users));
// };

// const getCurrentUser = (): User | null => {
//   const currentUser = localStorage.getItem('currentUser');
//   return currentUser ? JSON.parse(currentUser) : null;
// };

// const saveCurrentUser = (user: User | null) => {
//   if (user) {
//     localStorage.setItem('currentUser', JSON.stringify(user));
//   } else {
//     localStorage.removeItem('currentUser');
//   }
// };

// const generateId = (): string => {
//   return Date.now().toString() + Math.random().toString(36).substr(2, 9);
// };

// export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [user, setUser] = useState<User | null>(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     checkAuthStatus();
//   }, []);

//   const checkAuthStatus = async () => {
//     try {
//       // api mock delay
//       await new Promise(resolve => setTimeout(resolve, 500));
      
//       const currentUser = getCurrentUser();
//       if (currentUser) {
//         setUser(currentUser);
//       }
//     } catch (error) {
//       console.error('Auth check failed:', error);
//       saveCurrentUser(null);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
//     try {
//       setIsLoading(true);
      
//       // Simulate API delay
//       await new Promise(resolve => setTimeout(resolve, 1000));
      
//       const users = getStoredUsers();
//       const foundUser = users.find(u => u.email.toLowerCase() === email.toLowerCase());
      
//       if (!foundUser) {
//         return { success: false, error: 'Пользователь с таким email не найден' };
//       }
      
//       if (foundUser.password !== password) {
//         return { success: false, error: 'Неверный пароль' };
//       }
      
//       // Remove password from user object before setting state
//       const userWithoutPassword: User = {
//         id: foundUser.id,
//         email: foundUser.email,
//         firstName: foundUser.firstName,
//         lastName: foundUser.lastName,
//         createdAt: foundUser.createdAt
//       };
      
//       setUser(userWithoutPassword);
//       saveCurrentUser(userWithoutPassword);
      
//       return { success: true };
//     } catch (error) {
//       return { success: false, error: 'Ошибка сети. Попробуйте снова.' };
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const signup = async (userData: SignupData): Promise<{ success: boolean; error?: string }> => {
//     try {
//       setIsLoading(true);
      
//       // Simulate API delay
//       await new Promise(resolve => setTimeout(resolve, 1000));
      
//       const users = getStoredUsers();
      
//       // Check if user already exists
//       const existingUser = users.find(u => u.email.toLowerCase() === userData.email.toLowerCase());
//       if (existingUser) {
//         return { success: false, error: 'Пользователь с таким email уже существует' };
//       }
      
//       // Create new user
//       const newUser: StoredUser = {
//         id: generateId(),
//         email: userData.email,
//         firstName: userData.firstName,
//         lastName: userData.lastName,
//         password: userData.password,
//         createdAt: new Date().toISOString()
//       };
      
//       // Save to localStorage
//       users.push(newUser);
//       saveUsers(users);
      
//       // Remove password from user object before setting state
//       const userWithoutPassword: User = {
//         id: newUser.id,
//         email: newUser.email,
//         firstName: newUser.firstName,
//         lastName: newUser.lastName,
//         createdAt: newUser.createdAt
//       };
      
//       setUser(userWithoutPassword);
//       saveCurrentUser(userWithoutPassword);
      
//       return { success: true };
//     } catch (error) {
//       return { success: false, error: 'Ошибка сети. Попробуйте снова.' };
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const logout = () => {
//     setUser(null);
//     saveCurrentUser(null);
//   };

//   const value: AuthContextType = {
//     user,
//     isAuthenticated: !!user,
//     isLoading,
//     login,
//     signup,
//     logout,
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };
