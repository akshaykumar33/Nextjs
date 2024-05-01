import Image from 'next/image' //it is best and auto optimizes for internal images similar to React but for external source just specify in next.config for domain


export default function LoginUser() {
    

    return (
        <div>
             
            Login User
            <Image src="https://images.unsplash.com/photo-1586348943529-beaae6c28db9?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="nature-img" width={1000} height={1000}/>
        </div>
    );
}

export const generateMetadata=()=>{ //this as it is important to maintain and make a page specific title and desc
return{
    title:"this is user login",
    desscription:"this is description"
}
}

