'use client'

export default function User({params}) {
    console.log(params.user)
    return (
        <div>
           <h1>{params.user}</h1>
        </div>
    );
}


   