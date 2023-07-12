
import React from "react";

const Match=(props)=>{
    let x=props.x;
    let y=props.y;
    let z=props.z;

return(
    <>
      <div className='slot_inner'>
   <h1>{x}{y}{z}</h1>
   <h1>This is matching</h1>
   <hr />
      </div>
    </>
  )
}
export default Match;