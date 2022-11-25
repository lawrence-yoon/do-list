function TextField({value, onChange=()=>{}, onKeyDown=()=>{}}){
    return (
      <input 
        className='text-gray-900 bg-gray-400 border border-transparent w-4/6 p-2 px-4 rounded-full block m-2 hover:border-white' 
        value={value} 
        autoFocus
        onChange={e=>{onChange(e.target.value)}}
        onKeyDown={e=>{onKeyDown(e.key)}}
      />
    )
  }

export default TextField