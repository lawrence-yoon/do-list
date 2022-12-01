import {ButtonTrash, ButtonOptions} from "./Button"


function Note({key, id, entry, onClick=()=>{}, onClick2=()=>{}}){
  return (
    <section className='bg-gray-500 p-2 rounded-sm m-1 flex flex-row align-middle justify-between'>
      <div className="break-words overflow-hidden">
        <h2 className="text-lg bold">{entry.title}</h2>
        <p className="text-sm ">{entry.details}</p>
      </div>
      <div className="flex flex-col justify-between">
        <ButtonOptions onClick={()=>onClick2(id)}/>
        <ButtonTrash onClick={()=>onClick(id)}/>
      </div>
    </section>
  )
}

export default Note