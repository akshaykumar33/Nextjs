import { redirect } from 'next/navigation'; //redirecting on client side

function ID({params}) {
    if(params.id==4) //don't use === always ==
    redirect('/login')
  return (
    <div>{params.id}</div>
  )
}

export default ID