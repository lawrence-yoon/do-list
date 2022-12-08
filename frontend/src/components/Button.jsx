export default function Button({children, className, onClick=()=>{}}){
  const defaultClassNames = "shadow-md focus:cursor-pointer"
  return (
      <button 
          className={`${defaultClassNames} ${className?className:""}`}
          onClick={onClick}
      >
      {children}
      </button>
  )
}

export const ButtonNote = function({onClick=()=>{}, ...rest}){
  return (
    <Button 
      className="border border-transparent flex text-lg items-center font-semibold p-5 m-1 rounded-xl hover:bg-gray-800 hover:border-white" 
      onClick={onClick}
      {...rest}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
        </svg>
    </Button>
  )
}

export const ButtonOptions = function({onClick=()=>{}, ...rest}){
  return (
    <Button 
      className="border border-transparent flex text-md items-center font-semibold p-2 pb-2.5 px-3 m-1 rounded-xl hover:bg-gray-800 hover:border-white" 
      onClick={onClick}
      {...rest}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    </Button>
  )
}

export const ButtonTrash = function({onClick=()=>{}, ...rest}){
  return (
    <Button 
      className="border border-transparent flex text-md items-center font-semibold p-2 pb-2.5 px-3 m-1 rounded-xl hover:bg-gray-800 hover:border-white" 
      onClick={onClick}
      {...rest}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
        </svg>
    </Button>
  )
}

export const ButtonConfirm = function({onClick=()=>{}, ...rest}){
  return (
    <Button 
      className="border border-transparent bg-gray-600 flex text-md items-center font-semibold p-2 pb-2.5 px-3 m-1 rounded-xl hover:bg-gray-800 hover:border-white" 
      onClick={onClick}
      {...rest}>
      <span>Confirm</span>
    </Button>
  )
}

export const ButtonCancel = function({onClick=()=>{}, ...rest}){
  return (
    <Button 
      className="border border-transparent flex text-md items-center font-semibold p-2 pb-2.5 px-3 m-1 rounded-xl hover:bg-gray-800 hover:border-white" 
      onClick={onClick}
      {...rest}>
      <span>Cancel</span>
    </Button>
  )
}

export const ButtonMove = function({onClick=()=>{}, ...rest}){
  return (
    <Button 
      className="border border-transparent flex text-md items-center font-semibold p-2 pb-2.5 px-3 m-1 rounded-xl hover:bg-gray-800 hover:border-white" 
      onClick={onClick}
      {...rest}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
        </svg>
    </Button>
  )
}

export const ButtonArchiveBox = function({onClick=()=>{}, ...rest}){
  return <Button 
    className="border border-transparent flex text-lg items-center font-semibold p-5 m-1 rounded-xl hover:bg-gray-800 hover:border-white"  
    onClick={onClick}
    {...rest}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
  </Button>
}

export const ButtonPencil = function({onClick=()=>{}, ...rest}){
  return <Button 
    className="border border-transparent flex text-xs items-center font-semibold p-2 m-1 rounded-full hover:bg-gray-800 hover:border-white" 
    onClick={onClick}
    {...rest}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
      </svg>
  </Button>
}

export const ButtonLeft = function({onClick=()=>{}, ...rest}){
  return <Button 
    className="border border-transparent flex text-xs items-center font-semibold p-2 m-1 rounded-full hover:bg-gray-800 hover:border-white" 
    onClick={onClick}
    {...rest}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
      </svg>
  </Button>
}

export const ButtonRight = function({onClick=()=>{}, ...rest}){
  return <Button 
    className="border border-transparent flex text-xs items-center font-semibold p-2 m-1 rounded-full hover:bg-gray-800 hover:border-white" 
    onClick={onClick}
    {...rest}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
      </svg>
  </Button>
}