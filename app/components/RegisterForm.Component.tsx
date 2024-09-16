/* eslint-disable @next/next/no-img-element */
'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import InputComponent from "./Input.Component";

// Assets
import Link from "next/link";

export default function RegisterFormComponent(): React.ReactNode{
    const [ registerState, setRegisterState ] = useState({
        email: "",
        username: "",
        password: ""
    })
    const route = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setRegisterState({
            ...registerState,
            [name]: value
        })
    }
    
    const handleRegister = async(e: React.MouseEvent) => {
        e.preventDefault();
        try{
            const response = await fetch('/api/register',{
                method: "POST",
                headers:{
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({...registerState})
            });
            
            if(response.ok)
            {
                route.replace('/login');
            }

        }catch(err){
            console.log("Error Registering:\n", err)
        }
    }

    return(
        <form className="w-full flex flex-col items-center justify-start">
            <InputComponent 
            label="Email"
            type="email"
            name="email"
            handleChange={ handleChange }
            value={registerState.email}
            />
            <InputComponent 
            label="Username"
            type="text"
            name="username"
            handleChange={ handleChange }
            value={registerState.username}
            />
            <InputComponent 
            label="Password"
            type="password"
            name="password"
            handleChange={ handleChange }
            value={registerState.password}
            />

            <button 
            className="w-3/4 h-12 my-1 border-2 border-solid border-black flex items-center justify-center font-bold hover:bg-black hover:text-white"
            onClick={handleRegister}
            >
                Register
            </button>

            <Link href='/login'>Already have an account? Login Now</Link>
        </form>
    )
}