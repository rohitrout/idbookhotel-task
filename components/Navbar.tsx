import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <div className='w-full h-20 flex items-center justify-center border-2 border-b lg:px-44'>
        <div  className='w-full flex justify-between items-center'>
        <div className='flex justify-around items-center w-full lg:w-[55%] font-semibold text-gray-500'>
            <Image src="/idbooklogo.png" alt="logo" width={100} height={100} />
            {/* <span>IDBOOK</span> */}
            <span className="hidden md:block">Become a Pro </span>
            <span className="hidden md:block">Corporate Enquiries</span>
            <span className="hidden md:block">24*7 Support</span>
        </div>
        <div className='flex justify-around w-full lg:w-[20%]'>
            <button className='border-[1px] border-gray-300 rounded-full p-[6px] px-5 font-semibold text-gray-600'>Be a Franchise</button>
            <Link href={"/signup"}>
            <button className='border-[1px] rounded-full p-2 px-5 font-semibold text-white bg-blue-900'>Sign Up</button>
            </Link>
        </div>
        </div>
    </div>
  )
}

export default Navbar