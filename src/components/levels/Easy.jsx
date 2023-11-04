import React from 'react'
import { IconList } from './IconList'

function Easy() {
  return (
    <div className='absolute bg-gray-800 w-full h-full top-0 left-0'>
      easy peasy game, lets get started!!
      <div className='flex flex-col justify-center items-center m-2 border '>
        <div className='grid grid-cols-2 p-2'>
          {IconList[0].Icons.map((icon, index) =>(
            <button className='p-2 bg-color m-1 w-20 h-16' key={index}>{icon}</button>
          ))}
          
        </div>
        
      </div>
    </div>
  )
}

export default Easy
