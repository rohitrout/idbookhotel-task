'use client'

import { useAuth } from '@/lib/useAuth'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function AdminPage() {
  const { user, toggleRole } = useAuth('admin')

  if (!user) return null

  return (
    <div className="baseContainer flex flex-col items-center mx-auto p-4 pt-16">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <p className="mb-4">Welcome, {user.name}. Your role is: <span className='text-red-500 font-semibold text-xl'>{user.role}</span></p>
      <div className="mb-4 mt-8">
        <h2 className="text-xl font-semibold mb-2">Admin Features</h2>
        <ul className="list-disc list-inside">
          <li>Manage users</li>
          <li>View analytics</li>
          <li>Configure system settings</li>
        </ul>
      </div>
      <div className="space-x-4">
        <Link href="/dashboard">
          <Button variant="outline" className='bg-blue-100'>Go to Dashboard</Button>
        </Link>
      </div>
    </div>
  )
}