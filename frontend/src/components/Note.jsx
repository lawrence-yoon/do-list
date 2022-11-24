import {FaTrashAlt} from "react-icons/fa"

function Note({entry}){
  return (
    <section className='bg-gray-500 p-2 rounded-md m-3 flex justify-between align-middle'>
      <h2 className="text-left">{entry}</h2>
      <button className="bg-gray-500 p-2 rounded-xl hover:bg-gray-600"><FaTrashAlt/></button>
    </section>
  )
}

export default Note