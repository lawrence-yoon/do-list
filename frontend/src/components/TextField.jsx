function TextField({name, value, onChange=()=>{}}){
    return (
      <input 
        className='w-auto text-gray-900 bg-gray-400 border border-transparent p-2 px-4 m-1 rounded-xl block flex-grow hover:border-white' 
        name={name}
        value={value} 
        autoFocus
        onChange={(e)=>onChange(e)}
      />
    )
  }

export default TextField