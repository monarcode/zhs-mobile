import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export const useOnboarding = create<{
  firstTimeUser: boolean;
  setFirstTimeUser: (firstTimeUser: boolean) => void;
}>()(
  persist(
    (set) => ({
      firstTimeUser: true,
      setFirstTimeUser: (firstTimeUser: boolean) => set({ firstTimeUser }),
    }),
    {
      name: 'onboarding',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
