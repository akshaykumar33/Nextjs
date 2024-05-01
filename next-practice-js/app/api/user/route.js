//can't provide any random name important to provide HTTp methods in Caps only
//make api inside app only
import {NextResponse} from 'next/server';
import { users } from '@/app/util/db';
import fs from 'fs';

export function GET(){
    return NextResponse.json({result:'hello',data:users},{status:203})//status is not compulsion but you can 

}

export async function POST(req,res){
    let {id,name,email,password} = await req.json();
    console.log(email,password);
    if(!email || !password){
        return NextResponse.json({error:"required field not found"},{status:400})
    }
   else {
    users.push({id,name,email,password});
    const updatedUserArray=users;
    const updatedData=JSON.stringify(updatedUserArray,null,2);
    fs.writeFileSync('./app/util/db.js',`export const users=${updatedData};`,'utf-8')
 return NextResponse.json({res:"User successfully created",ok:true})

}
}

export async function PUT(req,res){
    let {id,name,email,password} = await req.json();
    let userIndex=users.findIndex((u)=>u.id==id);
    if(userIndex==-1)
    {
  return NextResponse({res:"User Not found"},{status:404})
    }

   if(name)
   users[userIndex].name=name;
   if(email)
   users[userIndex].email=email;
   if(password)
   users[userIndex].password=password;
    
    const updatedUserArray=users;
    const updatedData=JSON.stringify(updatedUserArray,null,2);
    fs.writeFileSync('./app/util/db.js',`export const users=${updatedData};`,'utf-8')
 return NextResponse.json({res:"User successfully updated",ok:true})


}