import React from 'react';
import './App.css'
import SlotM from './SlotMach';



const App=()=>{
return <>
<h1 className='heading'>🎰   Welcome to <span style={{fontWeight:'BOLD'}}>slot machin game </span> 🎰  </h1>

  <div className='slot-machine'>
<SlotM x='😄'  y='😄'  z='😄'/>
<SlotM  x='😄'  y='😄'  z='🎅'/>
<SlotM  x='😄'  y='😆'  z='🎅'/>
<SlotM  x='😄'  y='😆'  z='😆'/>
<SlotM  x='🍉'  y='🍉' z='🍉' />
<SlotM  x='🍉'  y='🍉' z='🎅' />

  </div>

  </>
}
export default App;