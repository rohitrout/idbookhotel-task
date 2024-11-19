'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import Link from "next/link"
import { useAuth } from "@/lib/useAuth"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be of least 8 Characters")
})

export default function LoginForm() {
  const { toast } = useToast();
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const { login } = useAuth()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password:""
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await login(values.email, values.password);
      toast({
        variant: "newVariant",
        title: "Successfully logged In",
      });
      router.push('/dashboard');
    } catch (error) {
      
      setError('Login failed');
    }
  }

  return (   
        <div className="flex flex-col space-y-4">
          

          <div className="space-y-4">
            <Button 
              variant="outline" 
              className="flex gap-12 w-full h-11 bg-[#f5f6f7] hover:bg-[#f5f6f7]/90"
              onClick={() => console.log("Facebook login")}
            >
               <Image src="/facebooklogo.png" alt="logo" width={20} height={20} />
                <span>Continue with Facebook</span> 
            </Button>

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
                name="password"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                     <FormLabel className="flex items-start pb-2 text-gray-600">Enter Password*</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Please Enter Password" 
                        {...field}
                        className=""
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
              <Button 
                type="submit" 
                className="rounded-full h-11 w-full bg-[#4267B2] hover:bg-[#4267B2]/90"
              >
                Send OTP
              </Button>
            </form>
          </Form>

          <Button 
            variant="link" 
            className="text-[#4267B2] hover:text-[#4267B2]/90"
            onClick={() => console.log("Login with password")}
          >
            Login with password
          </Button>

          <div className="text-sm">
            New user?{" "}
            <Link href="/signup">
            <Button 
              variant="link" 
              className="text-[#4267B2] hover:text-[#4267B2]/90 p-0"
              onClick={() => console.log("Create account")}
            >
              Create an account
            </Button>
            </Link>
          </div>
        </div>
      
  )
}