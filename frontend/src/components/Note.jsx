import {SlTrash, SlOptions} from "react-icons/sl"

function Note({key, id, entry, onClick=()=>{}}, onClick2=()=>{}){
  return (
    <section className='bg-gray-500 p-2 rounded-sm m-1 flex flex-row align-middle justify-between'>
      <div className="break-words overflow-hidden">
        <h2 className="text-lg bold">{entry.title}</h2>
        <p className="text-sm ">{entry.details}</p>
      </div>
      <div className="flex flex-col justify-between">
        <button 
          className="bg-gray-500 p-2 px-3 rounded-xl border border-transparent block hover:border-white hover:bg-gray-600"
          onClick={()=>onClick2(id)}
        >
          <SlOptions/>
        </button>
        <button 
          className="bg-gray-500 p-2 px-3 rounded-xl border border-transparent block hover:border-white hover:bg-gray-600"
          onClick={()=>onClick(id)}
        >
          <SlTrash/>
        </button>

      </div>
    </section>
  )
}

export default Note