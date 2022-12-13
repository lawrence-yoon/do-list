import Note from './Note'
import { ButtonNote } from './Button'
import { ModalNote, ModalDelete, ModalMove} from './Modal'
import { useState } from 'react'

export default function List({list, setList, setListLeft, setListRight, label}){
    const initialTextState = {
      title:"",
      details:""
    }
    
    const [text, setText] = useState(initialTextState)
    const [textTargeted, setTextTargeted] = useState({id:null, data:{}})
    const [isNoteModalOpen, setIsNoteModalOpen] = useState(false)
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [isMoveModalOpen, setIsMoveModalOpen] = useState(false)
  
    function handleTextChange(e){
      setText(prevText=>({
        ...prevText,
        [e.target.name]:e.target.value
      }))
    }
  
    //Create new Note
    //
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
    
    //Delete targeted Note
    //
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
    
    //Edit targeted Note
    //
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

    //Move targeted Note
    //
    function handleMove(ID){
      setTextTargeted({
        id:ID,
        data:list[ID]
      })
      setText(list[ID])
      setIsMoveModalOpen(true)
    }
  
    function handleMoveLeft(){
      setListLeft(prevList=>[...prevList, text])
      setList(prev=>prev.filter((elem,index)=>index != textTargeted.id))
      setText(initialTextState)
      setTextTargeted({id:null, data:{}})
      setIsMoveModalOpen(false)
    }
    
    function handleMoveRight(){
      setListRight(prevList=>[...prevList, text])
      setList(prev=>prev.filter((elem,index)=>index != textTargeted.id))
      setText(initialTextState)
      setTextTargeted({id:null, data:{}})
      setIsMoveModalOpen(false)
    }

    function handleCancelMove(){
      setText(initialTextState)
      setIsMoveModalOpen(false)
    }
  
    return (
      <div className='max-w-md min-w-[300px] border rounded-lg flex flex-col p-2 relative text-white bg-gray-700' >
        
        <h1 className='text-3xl font-bold pt-6 pb-3 text-center'>{label}</h1>
  
        <NoteArea>
        
          {list.map((elem, index)=>
            <Note key={index} id={index} entry={elem} onClickDelete={handleDelete} onClickEdit={handleEdit} onClickMove={handleMove}/>
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
      
        { isMoveModalOpen ? <ModalMove textTargeted={textTargeted} handleMoveLeft={handleMoveLeft} handleMoveRight={handleMoveRight} handleCancel={handleCancelMove}/> : null }
      </div>
    )
}

export function NoteArea({children, ...rest}){
  return (
    <div className='container min-h-[200px] flex flex-col bg-gray-800 mx-auto p-1 mb-2 rounded-md md:min-w-[25%]'>
      {children}
    </div>
  )
}
