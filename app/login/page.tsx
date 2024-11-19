import React from 'react'
import LoginForm from '@/components/LoginForm'

const page = () => {
  return (
    <div className="flex justify-center items-center pt-24 p-4">
      <div className="w-full max-w-[450px] text-center">
        <div className='flex flex-col'>
        {/* <span className='text-5xl font-bold'>Login</span> */}
        <span className="text-5xl font-bold pb-20">Login</span>
        <LoginForm/>        
        </div>
      </div>
    </div>
  )
}

export default page