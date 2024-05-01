import {NextResponse} from 'next/server'
import { users } from '@/app/util/db';
import fs from 'fs';

export async function GET(_,res){
    const {id}=await res.params;
    const user=users.filter((u)=>u.id==id)
    console.log("users",user);
    console.log(process.env.JWT_SECRET)
    return NextResponse.json({user})//status is not compulsion but you can 

}

export async function DELETE(req,res){
    const {id}=await res.params;
    let userIndex=users.findIndex((u)=>u.id==id);
    if(userIndex==-1)
    {
  return NextResponse.json({res:"User Not found"},{status:404})
    }

     
    users.splice(userIndex,1);
    const updatedUserArray=users;
    const updatedData=JSON.stringify(updatedUserArray,null,2);
    fs.writeFileSync('./app/util/db.js',`export const users=${updatedData};`,'utf-8')
 return NextResponse.json({res:"User successfully deleted",ok:true})


}