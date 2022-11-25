import {FaTrashAlt} from "react-icons/fa"

function Note({key, id, entry, onClick=()=>{}}){
  return (
    <section className='bg-gray-500 p-2 rounded-sm m-1 flex justify-between align-middle'>
      <h2 className="text-left p-2">{entry}</h2>
      <button className="bg-gray-500 p-2 px-3 rounded-xl border border-transparent block hover:border-white hover:bg-gray-600"
        onClick={()=>onClick(id)}
      ><FaTrashAlt/></button>
    </section>
  )
}

export default Note