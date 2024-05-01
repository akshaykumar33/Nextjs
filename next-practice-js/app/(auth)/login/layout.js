'use client'

import Link from 'next/link'
import { usePathname } from "next/navigation"; //it's important to make use clent t usepathname but it will not works in Rootlayout as it can't be made client

 


function layout({children}) {
    const path=usePathname();
    console.log(path)
    

  return (
    <div>
       
        <h1>
        {path!='/login/admin'?(<Link className='link'href='/login/admin'>Admin</Link>):
        (<Link className='link' href='/login/user'>User</Link>)}
        </h1>
        {children}
    </div>
  )
}

export default layout