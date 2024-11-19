'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import Link from "next/link"

const formSchema = z.object({
  name : z.string(),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string(),
  password: z.string()
})

export default function SignUpForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: ""
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (   
        <div className="flex flex-col space-y-3">
          

          <div className="space-y-4">
            {/* <div className=""> */}
            <Button 
              variant="outline" 
              className="flex gap-12 w-full h-11 bg-[#f5f6f7] hover:bg-[#f5f6f7]/90"
              onClick={() => console.log("Facebook login")}
            >
               <Image src="/facebooklogo.png" alt="logo" width={20} height={20} />
                <span>Continue with Facebook</span> 
            </Button>
            {/* </div> */}

            <Button 
              variant="outline" 
              className="flex  gap-16 w-full h-11 bg-[#f5f6f7] hover:bg-[#f5f6f7]/90"
              onClick={() => console.log("Apple login")}
            >
               <Image src="/applelogo.png" alt="logo" width={20} height={20} />
              <span>Continue with Apple</span>
            </Button>

            <Button 
              variant="outline" 
              className="flex  gap-16 w-full h-11 bg-[#f5f6f7] hover:bg-[#f5f6f7]/90"
              onClick={() => console.log("Google login")}
            >
              <Image src="/googlelogo.png" alt="logo" width={20} height={20} />
              <span>Continue with Google</span>
            </Button>
          </div>

          <div className="flex items-center justify-center">
            <Separator className="w-1/3" />
            <span className="mx-4 text-sm text-muted-foreground">OR</span>
            <Separator className="w-1/3" />
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                     <FormLabel className="flex items-start pb-2 text-gray-600">Name*</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Your Name" 
                        {...field}
                        className=""
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                     <FormLabel className="flex items-start pb-2 text-gray-600">Email Address*</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="example@example.com" 
                        {...field}
                        className=""
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                     <FormLabel className="flex items-start pb-2 text-gray-600">Phone number*</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="10-digit mobile_number" 
                        {...field}
                        className=""
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                     <FormLabel className="flex items-start pb-2 text-gray-600">Password*</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter Password" 
                        {...field}
                        className=""
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button 
                type="submit" 
                className="rounded-full h-11 w-full bg-[#4267B2] hover:bg-[#4267B2]/90"
              >
                Continue
              </Button>
            </form>
          </Form>

          <Button 
            variant="link" 
            className="text-[#4267B2] hover:text-[#4267B2]/90"
            onClick={() => console.log("Login with password")}
          >
            Secure Signup with an OTP
          </Button>

          <div className="text-sm">
            Already have an account?{" "}
            <Link href={"/login"}>
            <Button 
              variant="link" 
              className="text-[#4267B2] hover:text-[#4267B2]/90"
              onClick={() => console.log("Login")}
            >
              Login
            </Button>
            </Link>
          </div>
        </div>
      
  )
}