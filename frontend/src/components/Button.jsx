import {SlPlus, SlList, SlLogin, SlLogout,  SlNote, SlNotebook, SlOptionsVertical, SlOptions, SlMenu } from "react-icons/sl"

export function ButtonPlus({onClick=()=>{}}){
    return (
        <button 
            className="border border-transparent flex text-lg items-center font-semibold py-2 px-3 m-1 rounded-xl hover:bg-gray-800 hover:border-white" 
            onClick={onClick}
        >
        <SlPlus/> <p className="ml-1">Add</p>
        </button>
    )
}

export function ButtonNotebook({onClick=()=>{}}){
  return (
      <button 
          className="border border-transparent flex text-lg items-center font-semibold py-2 px-3 m-1 rounded-xl hover:bg-gray-800 hover:border-white" 
          onClick={onClick}
      >
      <SlNotebook/>
      </button>
  )
}

export default function Button({icon, onClick=()=>{}}){
  return (
      <button 
          className="border border-transparent flex text-lg items-center font-semibold py-2 px-3 m-1 rounded-xl hover:bg-gray-800 hover:border-white" 
          onClick={onClick}
      >
      {icon}
      </button>
  )
}
