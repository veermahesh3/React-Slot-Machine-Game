import React from "react"
export const NotMatch=(props)=>{
    let x=props.x;
  let y=props.y;
  let z=props.z;
return(
    <>
      <div className='slot_inner'>
   <h1>{x}{y}{z}</h1>
   <h1>This is not matching</h1>
   <hr />
      </div>
    </>
  )
}