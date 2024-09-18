import React from 'react'
import Link from 'next/link'
import LoginFormComponent from '@/app/components/LoginForm.Component'

function Page(): React.ReactNode {
  return (
    <main className='w-screen h-screen flex items-center justify-center'>
      <Link href='/'>
        <span className="material-symbols-outlined absolute left-4 top-4 text-4xl">home</span>
      </Link>
        <div className='w-1/2 flex flex-col items-center justify-start'>
            <LoginFormComponent/>
        </div>
    </main>
  )
}

export default Page