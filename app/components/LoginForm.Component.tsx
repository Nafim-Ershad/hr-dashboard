/* eslint-disable @next/next/no-img-element */
'use client';

import React, { ChangeEvent, useEffect, useState } from "react";
import InputComponent from "./Input.Component";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

// Assets
import Google from '@/public/assets/google.png';
import Facebook from '@/public/assets/facebook.png';

export default function LoginFormComponent(): React.ReactNode{
    const [ loginState, setLoginState ] = useState({
        email: "",
        password: ""
    });
    const router = useRouter();
    const {data: session, status} = useSession();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginState({
            ...loginState,
            [name]: value
        })
    }
    
    const handleClick = async(e: React.MouseEvent) => {
        e.preventDefault();

        try{
            if(loginState.email && loginState.password)
            {
                const response = await signIn('credentials', { ...loginState, redirect: false });

                if(!response?.ok)
                {   
                    throw new Error(`${response?.error}`);
                }
            }
            else{
                throw new Error("Please fillup both the email and password.")
            }
        }
        catch(error)
        {
            console.log(error)
        }
    }

    useEffect(() => {
        if (status === 'authenticated' && session?.user?.id) {
            console.log(session)
            setLoginState({
                email: "",
                password: ""
            });
          // Redirect to dynamic dashboard path
          router.push(`/dashboard/${session.user.id}`);
        }
        console.log(session);
      }, [status, session, router]);

    return(
        <form className="w-full flex flex-col items-center justify-start">
            <InputComponent 
            label="Email"
            type="email"
            name="email"
            handleChange={ handleChange }
            value={loginState.email}
            />
            <InputComponent 
            label="Password"
            type="password"
            name="password"
            handleChange={ handleChange }
            value={loginState.password}
            />

            <button 
            className="w-3/4 h-12 my-1 border-2 border-solid border-black flex items-center justify-center font-bold hover:bg-black hover:text-white"
            onClick={handleClick}
            >
                Log In
            </button>
            <button className="w-3/4 h-12 my-1 flex items-center justify-center bg-slate-300">
                <Image src={ Google } height={36} alt="google" />
            </button>
            <button className="w-3/4 h-12 my-1 flex items-center justify-center bg-facebook">
                <Image src={ Facebook } height={36} alt="facebook" />
            </button>

            <span>Don&apos;t have an account? <Link href='/register'>Register Now</Link></span>
        </form>
    )
}