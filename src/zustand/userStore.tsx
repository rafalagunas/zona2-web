import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { SecUser } from '../types/user.types';

interface UserState {
  user: SecUser | null;
  setUser: (user: SecUser | null) => void;
  clearUser: () => void;
}

export const useStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      clearUser: () => set({ user: null }),
    }),
    {
      name: 'user-storage', // nombre de la clave en localStorage
    }
  )
);

