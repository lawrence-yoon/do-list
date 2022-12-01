import {SlNote, SlOptions, SlTrash } from 'react-icons/sl'

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
      <SlNote/>
    </Button>
  )
}

export const ButtonOptions = function({onClick=()=>{}, ...rest}){
  return (
    <Button 
      className="border border-transparent flex text-xs items-center font-semibold p-2 m-1 rounded-full hover:bg-gray-800 hover:border-white" 
      onClick={onClick}
      {...rest}>
      <SlOptions/>
    </Button>
  )
}

export const ButtonTrash = function({onClick=()=>{}, ...rest}){
  return (
    <Button 
      className="border border-transparent flex text-xs items-center font-semibold p-2 m-1 rounded-full hover:bg-gray-800 hover:border-white" 
      onClick={onClick}
      {...rest}>
      <SlTrash/>
    </Button>
  )
}

export const ButtonConfirm = function({onClick=()=>{}, ...rest}){
  return (
    <Button 
      className="border border-transparent flex text-md items-center font-semibold p-2 pb-2.5 px-3 m-1 rounded-xl hover:bg-gray-800 hover:border-white" 
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

export const ButtonDelete = function({onClick=()=>{}, ...rest}){
  return (
    <Button 
      className="border border-transparent flex text-md items-center font-semibold p-2 pb-2.5 px-3 m-1 rounded-xl hover:bg-gray-800 hover:border-white" 
      onClick={onClick}
      {...rest}>
      <span>Delete</span>
    </Button>
  )
}