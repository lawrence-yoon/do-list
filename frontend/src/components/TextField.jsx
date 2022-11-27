function TextField({name, value, onChange=()=>{}, onKeyDown=()=>{}}){
    return (
      <input 
        className='w-auto text-gray-900 bg-gray-400 border border-transparent p-2 px-4 rounded-t-xl block flex-grow hover:border-white' 
        name={name}
        value={value} 
        autoFocus
        onChange={e=>{onChange(e)}}
        onKeyDown={e=>{onKeyDown(e)}}
      />
    )
  }

export default TextField