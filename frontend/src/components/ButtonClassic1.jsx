import React from 'react'

function ButtonClassic1() {
  return (
        <button 
            className="border border-transparent bg-gray-800 text-sm font-semibold pb-0.5 px-4 m-1 rounded-full block hover:bg-gray-900 hover:border-white" 
            onClick={onClick}
        >Submit</button>
  )
}

export default ButtonClassic1