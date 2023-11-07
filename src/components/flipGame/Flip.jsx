import React from 'react'
import Click from './Click';
//import Loader from '../Loader';

function Flip() {

  return (
    <div className='flipgame '>
      <span className='flex justify-center'>click on the letter(s) to flip what is underneath</span>
      <div className='flex flex-row justify-center text-white items-center p-2 m-1 leading-10'>
      <div className='flipContainer p-2 bg-black h-[420px]'>
        <div className='flex flex-col justify-center items-center m-1 mb-2 p-2 text-5xl bg-emerald-800'>
            <Click letter='F'/>            
        </div>
        <div className='flex flex-col justify-center items-center m-1 p-2 text-5xl bg-emerald-800'>
            <Click letter='I'/>
        </div>
      </div>
      <div className='flipcontainer p-2 bg-black h-[420px]'>
        <div className='flex flex-col justify-center items-center m-1 mb-2 p-2 text-5xl w-48 h-48 scale bg-emerald-800'>
            L
        </div>
        <div className='flex flex-col justify-center items-center m-1 p-2 text-5xl bg-emerald-800'>
            <Click letter='P'/>
        </div>
      </div>
      </div> 
    </div>
  )
}

export default Flip
