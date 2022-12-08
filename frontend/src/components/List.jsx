import Note from './Note'
import { ButtonNote } from './Button'
import { ModalNote, ModalDelete} from './Modal'
import { useState } from 'react'

export default function List({list, setList, label}){
    const initialTextState = {
      title:"",
      details:""
    }
    
    // the data that will be passed into database or higher order function. 
  
    
    const [text, setText] = useState(initialTextState)
    const [textTargeted, setTextTargeted] = useState({id:null, data:{}})
    const [isNoteModalOpen, setIsNoteModalOpen] = useState(false)
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  
    function handleTextChange(e){
      setText(prevText=>({
        ...prevText,
        [e.target.name]:e.target.value
      }))
    }
  
    function handleNote(){
      setIsNoteModalOpen(true)
    }
  
    function handleConfirmNote(){
      setList(prevList=>[...prevList, text])
      setText(initialTextState)
      setIsNoteModalOpen(false)
    }
  
    function handleClose(){
      setText(initialTextState)
      setIsNoteModalOpen(false)
    }
  
    function handleDelete(ID){
      setTextTargeted({
        id:ID,
        data:list[ID]
      })
      setIsDeleteModalOpen(true)
    }
  
    function handleConfirmDelete(){
      setList(prev=>prev.filter((elem,index)=>index != textTargeted.id))
      setTextTargeted({})
      setIsDeleteModalOpen(false)
    }
  
    function handleCancelDelete(){
      setTextTargeted(0)
      setText(initialTextState)
      setIsDeleteModalOpen(false)
    }
  
    function handleEdit(ID){
      setTextTargeted({
        id:ID,
        data:list[ID]
      })
      setText(list[ID])
      setIsEditModalOpen(true)
    }
  
    function handleConfirmEdit(){
      const edittedArray = list
      edittedArray[textTargeted.id] = text
      setList(edittedArray)
      setText(initialTextState)
      setIsEditModalOpen(false)
    }
  
    function handleCancelEdit(){
      setText(initialTextState)
      setIsEditModalOpen(false)
    }
  
    return (
      <div className='body max-w-md min-w-[375px] flex flex-col p-2 mx-auto relative text-white bg-gray-700' >
        
        <h1 className='text-3xl font-bold pt-6 pb-3 text-center'>{label}</h1>
  
        <NoteArea>
          {list.map((elem, index)=>
            <Note key={index} id={index} entry={elem} onClickDelete={handleDelete} onClickEdit={handleEdit}/>
          )}
        </NoteArea>

        <div className='flex justify-end'>
          <ButtonNote onClick={handleNote}/>
        </div>
        
        {/* MODALS */}
        { isNoteModalOpen ? <ModalNote text={text} handleTextChange={handleTextChange} handleConfirm={handleConfirmNote} handleCancel={handleClose}/> : null }
        {/* <ModalNote */}
        { isDeleteModalOpen ? <ModalDelete textTargeted={textTargeted} handleConfirm={handleConfirmDelete} handleCancel={handleCancelDelete}/> : null }
  
        { isEditModalOpen ? <ModalNote text={text} handleTextChange= {handleTextChange} handleConfirm={handleConfirmEdit} handleCancel={handleCancelEdit}/> : null }
      </div>
    )
}

export function NoteArea({children, ...rest}){
  return (
    <div className='container overflow-scroll flex flex-col flex-grow bg-gray-800 mx-auto p-1 mb-2 rounded-md'>
      {children}
    </div>
  )
}
