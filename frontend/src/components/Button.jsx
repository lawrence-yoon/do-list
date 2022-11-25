function Button({innerText, onClick=()=>{}}){
    return (
        <button 
            className="border-none bg-gray-800 text-sm font-semibold p-2 pb-2.5 px-4 rounded-full m-1 mb-3 mx-auto block hover:bg-gray-900" 
            onClick={onClick}
        >{innerText}</button>
    )
  }

export default Button