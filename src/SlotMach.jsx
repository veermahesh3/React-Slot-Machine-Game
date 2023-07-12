import React from "react";
import { NotMatch } from "./NotMatch";
import Match from "./Match";

const SlotM=(props)=>{
    // let x='😄';
    // let y='😄';
    // let z='🎅';
  let x=props.x;
  let y=props.y;
  let z=props.z;
  
  
   return x===y && y===z ? <Match x={x} y={y} z={z}/> : <NotMatch x={x} y={y} z={z}/>
    
  
  }
  export default SlotM;