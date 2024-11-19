'use client'

import { useAuth } from '@/lib/useAuth'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function DashboardPage() {
  const { user, logout, toggleRole } = useAuth()

  if (!user) return null

  return (
    <div className="baseContainer flex flex-col items-center mx-auto p-4 pt-16">
      <h1 className="text-2xl font-bold mb-4">Welcome, {user.name}</h1>
      <p className="mb-4">Your role: <span className='text-red-500 font-semibold text-xl'>{user.role}</span></p>
      
      {user.role === 'admin' && (
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Admin Features</h2>
          <ul className="list-disc list-inside">
          <li>You can access /admin page.</li>
            <li>Manage users</li>
            <li>View analytics</li>
            <li>Configure system settings</li>
          </ul>
        </div>
      )}

      
      <div className="mb-4 mt-8">
        <h2 className="text-xl font-semibold mb-2">User Features</h2>
        <ul className="list-disc list-inside">
          <li>View profile</li>
          <li>Update settings</li>
          <li>Access user-specific content</li>
        </ul>
      </div>
      
      <div className="space-x-4">
        <Button onClick={toggleRole}>
          Switch to {user.role === 'admin' ? 'User' : 'Admin'} Role
        </Button>
        <Button onClick={logout} variant="destructive">
          Logout
        </Button>
      </div>
      <Link href="/admin">
    <Button variant="outline" className='mt-8 bg-green-200'>Go to Admin Route</Button>
  </Link>
    </div>
  )
}