import React, { useState } from 'react'
import Click from './Click';

function Flip() {

  return (
    <div className='flipgame grid grid-flow-col text-white grid-cols-2 p-2 m-1 leading-10'>
      <div className='flipContainer p-2 bg-black'>
        <div className='border bg-emerald-800'>
            <span className='origin-bottom -rotate-12 w-20 h-48'>
            <Click letter='F'/>
            </span>
        </div>
        <div className=''>
            <span> <Click letter='I'/> </span>
        </div>
      </div>
      <div className='flipcontainer p-2 bg-neutral-700'>
        <div>
            <span> <Click letter='L'/> </span>
        </div>
        <div>
            <span> <Click letter='P'/> </span>
        </div>
      </div>
    </div>
  )
}

export default Flip
