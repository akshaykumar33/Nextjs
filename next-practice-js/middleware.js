import {NextResponse} from 'next/server'

export function middleware(request){
    console.log("middleware ran")
   
    if(request.nextUrl.pathname!='/login'){
        return NextResponse.redirect(new URL('/login',request.url));
    }
     return NextResponse.json({success:"Successfully ran"})
}



export const config = {
    matcher: ['/usersList/:path*'],  //make sure u write proper path or else will not run
  }