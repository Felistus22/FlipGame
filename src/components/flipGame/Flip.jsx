import React, { useState } from 'react'
import Click from './Click';

function Flip() {

  return (
    <div className='flipgame flex flex-row justify-center text-white items-center p-2 m-1 leading-10'>
      <div className='flipContainer p-2 bg-black h-[420px]'>
        <div className='flex flex-col justify-center items-center'>
            <span className='m-1 p-2 text-5xl bg-emerald-800'>
            <Click letter='F'/>
            </span>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <span className='m-1 p-2 text-5xl bg-emerald-800'> <Click letter='I'/> </span>
        </div>
      </div>
      <div className='flipcontainer p-2 bg-black h-[420px]'>
        <div className='flex flex-col justify-center items-center'>
            <span className='m-1 p-2 text-5xl w-48 h-48 flex flex-col justify-center items-center scale'> L </span>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <span className='m-1 p-2 text-5xl bg-emerald-800'> <Click letter='P'/> </span>
        </div>
      </div>
    </div>
  )
}

export default Flip
