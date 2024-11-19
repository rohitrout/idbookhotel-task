import Link from "next/link";
export default function Home() {
  return (
    <>
    <div className="flex items-center justify-center pt-40">
    <Link href="/login">
     <p className="text-3xl">Please login to continue</p>  
      </Link>
    </div>
    </>
  );
}
