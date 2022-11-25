function TextField({value, onChange=()=>{}}){
    return (
      <input 
        className='text-gray-900 bg-gray-400 border w-4/6 p-2 rounded-lg block mx-auto my-3' 
        value={value} 
        autoFocus
        onChange={e=>{onChange(e.target.value)}}
      />
    )
  }

export default TextField