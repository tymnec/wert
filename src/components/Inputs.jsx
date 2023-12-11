import React from 'react'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'

function Inputs() {
  return (
    <div className='flex flex-row justify-center my-6'>
      <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>

        <input 
          type="text" 
          placeholder='Search for city...'
          className='text-xl font-light p-3 px-5 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase rounded-2xl transition ease-in-out hover:scale-125' 
        />
        <UilSearch size = {25} className = 'text-white cursor-pointer transition ease-in-out hover:scale-150'/>
        <UilLocationPoint size = {25} className = 'text-white cursor-pointer transition ease-in-out hover:scale-150'/>
      </div>

      <div className='flex flex-row w-1/4 items-center justify-center'>
        <button name='metric' className='text-xl text-white font-light transition ease-in-out hover:scale-150'>
          °C
        </button>
        <p className='text-xl text-white mx-1'>|</p>
        <button name='imperial' className='text-xl text-white font-light transition ease-in-out hover:scale-150'>
          °F
        </button>
      </div>
    </div>
  )
}

export default Inputs