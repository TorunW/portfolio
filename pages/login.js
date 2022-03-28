import React, { useState, useEffect } from "react"
import { server } from '../config/server'
import { getCookies } from 'cookies-next';
import { useRouter } from 'next/router'

function Login(){
    const router = useRouter();
    const [ username, setUsername ] = useState('')
    const [ password, setPassword] = useState('')

    useEffect(() => {
        // getLoginData()
    },[])

    async function login(){

        const res = await fetch(`/api/login/`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body:JSON.stringify({
                username,
                password
            })
        });
        const response = await res.json()

        if (response.success === true){
            router.push("/admin") 
        }
    }

    return (
        <div>
            <h1>Login Page</h1>
            <input type={"text"} onChange={e => setUsername(e.target.value)} value={username} placeholder="Username"/>
            <input type={"password"} onChange={e => setPassword(e.target.value)} value={password} placeholder=""/>
            <button onClick={() => login()}>Login</button>
        </div>
    )
}

export default Login