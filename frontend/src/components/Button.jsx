function Button({innerText, onClick=()=>{}}){
    return (
        <button 
            className="border border-transparent bg-gray-800 text-sm font-semibold pb-0.5 px-4 rounded-full m-2 block hover:bg-gray-900 hover:border-white" 
            onClick={onClick}
        >{innerText}</button>
    )
  }

export default Button