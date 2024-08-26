
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { LogoIcon } from '@/assets/logo'

export default function Login() {
  return (
    <div className="flex min-h-screen w-full justify-center items-center bg-[#2D4152]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto w-full max-w-md space-y-6 px-8">
          <div className="flex flex-col items-center justify-center space-y-2">
            <LogoIcon />
            <p className="text-center text-zinc-100">
             Enter your email and password to access your dashboard.
            </p>
          </div>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className='text-white'>Email</Label>
              <Input
                id="email"
                type="email"
                name='email'
                placeholder="john@example.com"
                required
                className='text-white'
              />

            </div>
            <div className="relative space-y-2">
              <Label htmlFor="password" className='text-white'>Password</Label>
              <Input
                id="password"
                type="password"
                name='password'
                placeholder="***************"
                required
                className='text-white'
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-[#D3B36A] hover:bg-[#bd9d55]"
            >
              <Link href={'/app'}>
                Entrar
              </Link>
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}