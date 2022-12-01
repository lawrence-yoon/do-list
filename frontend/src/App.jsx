import { useState, useEffect } from 'react'
import TextField from './components/TextField'
import Note from './components/Note'
import TextFieldArea from './components/TextFieldArea'
import {ButtonNote, ButtonConfirm, ButtonCancel} from './components/Button'


function App() {
  const initialTextState = {
    title:"",
    details:""
  }

// this right here along with the useEffect enables the 
// localstorage, kinda neat 
  const initialListState = localStorage.getItem("MY_LIST")!==null?JSON.parse(localStorage.getItem("MY_LIST")):[]

  const [text, setText] = useState(initialTextState)
  const [list, setList] = useState(initialListState)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)

  useEffect(()=>{
    localStorage.setItem("MY_LIST", JSON.stringify(list))
  },[list])

  function saveTextToList(){
    setList(prevList=>[...prevList, text])
    setText(initialTextState)
    setIsModalOpen(false)
  }
  
  function handleTextChange(e){
    setText(prevText=>({
      ...prevText,
      [e.target.name]:e.target.value
    }))
  }

  //need new function for remove and edit. will fire a modal, delete one the confirm, and edit one the text field with some data in there already.
  function removeTextFromList(id){
    setList(prev=>prev.filter((elem,index)=>index != id))
  }

  //might need to make new state? for edit. 
  function editTextFromList(id){
    console.log("chose to edit item: " + id)
    // grab id, find entry with key of id, set text state to values in list entry, and open up the modal. modal will have fields and overwrite, and cancel button.
  }

  function keyDownHandler(keyPress){
    if(keyPress=="Enter" && text!=""){
      saveTextToList()
    }
  }

  function openModal(){
    setIsModalOpen(true)
  }

  function openEditModal(){
    setIsEditModalOpen(true)
  }

  function closeModal(){
    setText(initialTextState)
    setIsModalOpen(false)
  }
  
  // function test(){
  //   console.log("test")
  // }

  return (
    <div className='body container flex flex-col p-2 mx-auto h-screen max-w-screen-sm relative text-white bg-gray-700' >
      <h1 className='text-3xl font-bold pt-6 pb-3 text-center'>✍️ Do List</h1>

      <div className="container overflow-scroll flex flex-col flex-grow bg-gray-800 mx-auto p-1 mb-2 rounded-md">
        {list.map((elem, index)=>
          <Note key={index} id={index} entry={elem} onClick={removeTextFromList} onClick2={editTextFromList}/>
        )}
      </div>

      <div className='flex justify-end'>
        <ButtonNote onClick={openModal}/>
      </div>
      {isModalOpen &&
          <div className='w-full h-full bg-[rgba(0,0,0,0.5)] absolute top-0 left-0'>      
            <dialog className='flex flex-col border rounded-md p-1 top-[40%] absolute'>
              <TextField name="title" value={text.title} onChange={handleTextChange}/>
              <TextFieldArea name="details" value={text.details} onChange={handleTextChange}/>
              <div className='flex justify-end'>
                <ButtonConfirm onClick={saveTextToList}/>
                <ButtonCancel onClick={closeModal}/>
              </div>
            </dialog> 
          </div>
      }
      {isEditModalOpen &&
          <div className='w-full h-full bg-[rgba(0,0,0,0.5)] absolute top-0 left-0'>      
            <dialog className='flex flex-col border rounded-md p-1 top-[40%] absolute'>
              <TextField name="title" value={text.title} onChange={handleTextChange} onKeyDown={keyDownHandler}/>
              <TextFieldArea name="details" value={text.details} onChange={handleTextChange}/>
              <div className='flex justify-end'>
                <ButtonConfirm onClick={saveTextToList}/>
                <ButtonCancel onClick={closeModal}/>
              </div>
            </dialog> 
          </div>
      }
    </div>
  )
}


export default App
