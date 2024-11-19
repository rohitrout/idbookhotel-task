import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type User = {
  id: string
  name: string
  email: string
  role: 'admin' | 'user'
}

type AuthStore = {
  user: User | null
  login: (email: string, password: string) => void
  logout: () => void
  toggleRole: () => void
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      login: (email: string, password: string) => {
        // Mock login logic
        const mockUser: User = {
          id: '1',
          name: 'John Doe',
          email,
          role: 'user',
        }
        set({ user: mockUser })
      },
      logout: () => set({ user: null }),
      toggleRole: () =>
        set((state) => ({
          user: state.user
            ? { ...state.user, role: state.user.role === 'admin' ? 'user' : 'admin' }
            : null,
        })),
    }),
    {
      name: 'auth-storage',
    }
  )
)






