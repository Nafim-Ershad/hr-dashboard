import React from 'react'
import Link from 'next/link'
import RegisterFormComponent from '@/app/components/RegisterForm.Component'

function Page(): React.ReactNode {
  return (
    <main className='relative w-screen h-screen flex items-center justify-center'>
        <Link href='/'>
          <span className="material-symbols-outlined absolute left-4 top-4 text-4xl">home</span>
        </Link>
        <div className='w-1/2 flex flex-col items-center justify-start'>
            <RegisterFormComponent/>
        </div>
    </main>
  )
}

export default Page