import React from 'react'
import SignUpForm from '@/components/SignUpForm'

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-24 p-4">
        <span className="text-3xl lg:text-5xl font-bold pb-20">Sign Up with Password</span>
      <div className="w-full max-w-[450px] text-center">
        <div className='flex flex-col'>
        {/* <span className='text-5xl font-bold'>Login</span> */}
        
        <SignUpForm/>        
        </div>
      </div>
    </div>
  )
}

export default page