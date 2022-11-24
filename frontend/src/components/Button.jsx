function Button({innerText, onClick=()=>{}}){
    return (
        <button 
            className="border bg-gray-900 text-gray-400 p-1 px-2 pb-2 rounded-2xl m-1 mx-auto block" 
            onClick={onClick}
        >{innerText}</button>
    )
  }

export default Button