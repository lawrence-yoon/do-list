function TextField({value, onChange=()=>{}}){
    return (
      <input 
        className='text-gray-900 bg-gray-400 border p-2 rounded-lg my-3' 
        value={value} 
        autoFocus
        onChange={e=>{onChange(e.target.value)}}
      />
    )
  }

export default TextField