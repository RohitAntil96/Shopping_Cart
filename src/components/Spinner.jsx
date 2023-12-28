import React from 'react'
import "./Spinner.css"

const Spinner = () => {
  return (
    <div className='flex items-center justify-center h-screen w-screen flex-col'>
      <div className='spinner'></div>
      <p>Loading...</p>
    </div>
  )
}

export default Spinner
