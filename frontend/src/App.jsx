import { useState} from 'react'
import useLocalStorage from '../src/hooks/useLocalStorage'
import Note from './components/Note'
import {ButtonNote, ButtonArchiveBox} from './components/Button'
import { ModalNote, ModalDelete, ModalEdit } from './components/Modal'

function App() {
  const initialTextState = {
    title:"",
    details:""
  }
  
  const [list, setList] = useLocalStorage("list", [])
  
  const [text, setText] = useState(initialTextState)
  const [textTargeted, setTextTargeted] = useState({id:null, data:{}})
  const [isNoteModalOpen, setIsNoteModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)

  // function pullTitleAndDetailsWithId (id){
  //   const textTargetObject = list[id]
  //   setTextTargeted(textTargetObject)
  // }


  function handleTextChange(e){
    setText(prevText=>({
      ...prevText,
      [e.target.name]:e.target.value
    }))
  }

  function handleDelete(ID){
    setTextTargeted({
      id:ID,
      data:list[ID]
    })
    setIsDeleteModalOpen(true)
  }

  function handleEdit(ID){
    setTextTargeted({
      id:ID,
      data:list[ID]
    })
    setText(list[ID])
    setIsEditModalOpen(true)
    alert("edit")
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

  function handleConfirmDelete(){
    //close modal
    setList(prev=>prev.filter((elem,index)=>index != textTargeted.id))
    setTextTargeted({})
    setIsDeleteModalOpen(false)
  }

  function handleCancelDelete(){
    setTextTargeted(0)
    setIsDeleteModalOpen(false)
  }

  function handleConfirmEdit(){
    console.log("confirm")
    // [textTargeted.id] is id of targeted text
    //need to edit item in array with this id with texttarget
    const edittedArray = list
    edittedArray[textTargeted.id] = text
    setList(edittedArray)
    setText(initialTextState)
    setIsEditModalOpen(false)
  }

  function handleCancelEdit(){
    console.log("cancel")
    setIsEditModalOpen(false)
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

      { isNoteModalOpen ? <ModalNote text={text} handleTextChange={handleTextChange} handleConfirm={handleConfirmNote} handleCancel={handleClose}/> : null }


      { isDeleteModalOpen ? <ModalDelete textTargeted={textTargeted} handleConfirm={handleConfirmDelete} handleCancel={handleCancelDelete}/> : null }

      { isEditModalOpen ? <ModalEdit 
      text={text}
       handleTextChange= {handleTextChange} handleConfirm={handleConfirmEdit} handleCancel={handleCancelEdit}/> : null }
    </div>
  )
}

export default App
