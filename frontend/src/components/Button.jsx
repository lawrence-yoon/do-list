export default function Button({icon, onClick=()=>{}}){
  return (
      <button 
          className="border border-transparent flex text-xs items-center font-semibold p-5 m-1 rounded-xl hover:bg-gray-800 hover:border-white" 
          onClick={onClick}
      >
      {icon}
      </button>
  )
}

export function ButtonCSS({icon, className, onClick=()=>{}}){
  return (
      <button 
          className={className} 
          onClick={onClick}
      >
      {icon}
      </button>
  )
}