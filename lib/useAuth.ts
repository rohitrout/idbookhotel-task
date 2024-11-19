import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useAuthStore } from './store'
import { useToast } from "@/hooks/use-toast";

export function useAuth(requiredRole?: 'admin' | 'user') {
    const { toast } = useToast();
  const router = useRouter()
  const { user, login, logout, toggleRole } = useAuthStore()

  useEffect(() => {
    if (!user) {
      router.push('/login')
    } else if (requiredRole && user.role !== requiredRole) {
        toast({
            variant: "newVariant",
            title: "You are not authorized",
          });
      router.push('/unauthorized')
    }
  }, [user, requiredRole, router])


  return { user, login, logout, toggleRole }
}