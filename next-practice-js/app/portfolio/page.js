'use client'
import { useState } from "react";

export default function Portfolio() {
    console.log(process.env.JWT_SECRET)//u can acess them any were in client or server components
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();

    async function handleClick(){
        let response=await fetch('/api/user',{
            method:'POST',
            body:JSON.stringify({email,password})
        })
        response=await response.json();
        console.log(response);

        if(response.ok)
        alert("user registered")
        else
        alert("register user failed");

    }
    return (
        <div>
           <input type="text" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="Enter Email"/>
           <input type="text" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="Enter Password"/>
         <button onClick={handleClick}>Add User</button>
        </div>
    );
}
