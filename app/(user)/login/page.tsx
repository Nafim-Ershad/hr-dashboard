import LoginFormComponent from '@/app/components/LoginForm.Component'
import React from 'react'

function Page(): React.ReactNode {
  return (
    <main className='w-screen h-screen flex items-center justify-center'>
        <div className='w-1/2 flex flex-col items-center justify-start'>
            <LoginFormComponent/>
        </div>
    </main>
  )
}

export default Page