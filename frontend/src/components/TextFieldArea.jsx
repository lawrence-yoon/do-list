function TextFieldArea({name, value, onChange=()=>{}}) {
  return (
    <textarea 
        className='w-auto text-gray-900 bg-gray-400 border border-transparent p-2 px-4 m-1 rounded-xl block flex-grow hover:border-white' 
        rows="4"
        name={name}
        value={value} 
        onChange={e=>{onChange(e)}}
    
    />
  )
}

export default TextFieldArea