import { useState} from 'react'
import useLocalStorage from '../src/hooks/useLocalStorage'
import Note from './components/Note'
import {ButtonNote, ButtonArchiveBox} from './components/Button'
import { ModalNote } from './components/Modal'


function App() {
  const initialTextState = {
    title:"",
    details:""
  }

  const [text, setText] = useState(initialTextState)
  const [list, setList] = useLocalStorage("list", [])
  const [isNoteModalOpen, setIsNoteModalOpen] = useState(false)

  function handleTextChange(e){
    setText(prevText=>({
      ...prevText,
      [e.target.name]:e.target.value
    }))
  }

  function handleDelete(id){
    // i would like to make a confirm cancel model fired for this. for now it will delete
    setList(prev=>prev.filter((elem,index)=>index != id))
  }

  function handleEdit(id){
    // i would like to make a confirm cancel model fired for this. for now it will alert
    alert("edit pressed")
  }

  function handleConfirmNote(){
    setList(prevList=>[...prevList, text])
    setText(initialTextState)
    setIsNoteModalOpen(false)
  }

  function handleNote(){
    setIsNoteModalOpen(true)
  }

  function handleClose(){
    setText(initialTextState)
    setIsNoteModalOpen(false)
  }

  return (
    <div className='body container flex flex-col p-2 mx-auto h-screen max-w-screen-sm relative text-white bg-gray-700' >
      <h1 className='text-3xl font-bold pt-6 pb-3 text-center'>✍️ Do List</h1>

      <div className="container overflow-scroll flex flex-col flex-grow bg-gray-800 mx-auto p-1 mb-2 rounded-md">
        {list.map((elem, index)=>
          <Note key={index} id={index} entry={elem} onClickDelete={handleDelete} onClickEdit={handleEdit}/>
        )}
      </div>

      <div className='flex justify-between'>
        <ButtonArchiveBox onClick={()=>alert("youve clicked the archive box button")}/>
        <ButtonNote onClick={handleNote}/>
      </div>

      { isNoteModalOpen ? <ModalNote text={text} handleTextChange={handleTextChange} handleConfirmNote={handleConfirmNote} handleClose={handleClose}/> : null }

    </div>
  )
}




export default App
