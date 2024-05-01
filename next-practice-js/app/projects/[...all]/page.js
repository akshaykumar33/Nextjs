"use client"

export default function projects({params}) {
    console.log(params)
    return (
        <div>
          <h1>Projects and catch-all routes:{params.all}</h1> 
          {params.all.map((p,id)=>{
            return(
                <h2 key={id}>
                    {p}
                </h2>
            )
          })}
        </div>
    );
}


