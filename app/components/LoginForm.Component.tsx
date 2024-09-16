/* eslint-disable @next/next/no-img-element */
'use client';
import { ChangeEvent, useState } from "react";
import InputComponent from "./Input.Component";
import Image from "next/image";

// Assets
import Google from '../assets/google.png';
import Facebook from '../assets/facebook.png';
import Link from "next/link";

export default function LoginFormComponent(): React.ReactNode{
    const [ loginState, setLoginState ] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginState({
            ...loginState,
            [name]: value
        })
    }
    
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

            <button className="w-3/4 h-12 my-1 border-2 border-solid border-black flex items-center justify-center font-bold hover:bg-black hover:text-white">Log In</button>
            <button className="w-3/4 h-12 my-1 flex items-center justify-center bg-slate-300">
                <Image src={ Google } height={36} alt="google" />
            </button>
            <button className="w-3/4 h-12 my-1 flex items-center justify-center bg-facebook">
                <Image src={ Facebook } height={36} alt="facebook" />
            </button>

            <Link href='/register'>Don&apos;t have an account? Register Now</Link>
        </form>
    )
}