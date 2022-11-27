import {SlPlus} from "react-icons/sl"

function ButtonPost({onClick=()=>{}}){
    return (
        <button 
            className="border border-transparent flex text-lg items-center font-semibold py-2 px-3 m-1 rounded-xl hover:bg-gray-800 hover:border-white" 
            onClick={onClick}
        >
        <SlPlus/> <p className="ml-1">Add</p>
        </button>
    )
  }

export default ButtonPost