import { useState, useEffect } from 'react'
import TextField from './components/TextField'
import Note from './components/Note'
import TextFieldArea from './components/TextFieldArea'
import Button, {ButtonCSS} from './components/Button'
import {SlNote, SlOptions, SlTrash } from 'react-icons/sl'


function App() {
  const initialTextState = {
    title:"Untitled",
    details:""
  }

  const initialListState = localStorage.getItem("MY_LIST")!==null?JSON.parse(localStorage.getItem("MY_LIST")):[]

  const [text, setText] = useState(initialTextState)
  const [list, setList] = useState(initialListState)
  const [isModalOpen, setIsModalOpen] = useState(false)

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

  function removeTextFromList(id){
    setList(prev=>prev.filter((elem,index)=>index != id))
  }

  function keyDownHandler(keyPress){
    if(keyPress=="Enter" && text!=""){
      saveTextToList()
    }
  }

  function openModal(){
    setIsModalOpen(true)
  }

  function closeModal(){
    setText(initialTextState)
    setIsModalOpen(false)
  }
  
  const ButtonNote = ()=> <ButtonCSS 
    className="border border-transparent flex text-lg items-center font-semibold p-5 m-1 rounded-xl hover:bg-gray-800 hover:border-white" 
    icon={<SlNote/>} onClick={openModal}/>

  const ButtonConfirm = ()=><Button icon="Confirm" onClick={saveTextToList}/>


  //maybe export these out as named export, like we did for button?
  //like make a separate withLabel file, default export is the builder, and have named exports of wrapped components
    //perhaps named exports can justifiably be put on there as examples and built out for the specific company, but i think it should only be built of just one componnet wrapping, and only passable prop should be the state function handlers aka onclick onchange.


  // function ButtonGroup1(){
  //   return (
  //     <div>
  //       <SlAnchor/>
  //       <SlBell/>
  //     </div>)
  // }

  const ButtonTrash = ()=><Button icon={<SlTrash/>} onClick={saveTextToList}/>

  const ButtonOptions = ()=> <Button icon={<SlOptions/>} onClick={openModal}/>

  const ButtonCancel = ()=> <Button icon="Cancel" onClick={closeModal}/>
  function ButtonGroup2(Component1, Component2){
    return (
      <div className='flex justify-end flex-wrap'>
        <Component1/>
        <Component2/>
      </div>
    )
  }

  const ButtonGroup2Confirm = () => ButtonGroup2(ButtonCancel, ButtonConfirm)
  const ButtonGroup2Edit = ()=> ButtonGroup2()

  return (
    <div className='body container flex flex-col p-2 mx-auto h-screen max-w-screen-sm relative text-white bg-gray-700' >
      {/* <NavBar/> */}
      <h1 className='text-3xl font-bold pt-6 pb-3 text-center'>Do List</h1>

      <div className="container overflow-scroll flex flex-col flex-grow bg-gray-800 mx-auto p-1 mb-2 rounded-md">
        {list.map((elem, index)=>
          <Note key={index} id={index} entry={elem} onClick={removeTextFromList}/>
        )}
      </div>
      


      <div className='flex justify-end'><ButtonNote/></div>
      {isModalOpen &&      
          <dialog className='flex flex-col border rounded-md p-1 absolute top-1/4 '>
            <TextField name="title" value={text.title} onChange={handleTextChange} onKeyDown={keyDownHandler}/>
            <TextFieldArea name="details" value={text.details} onChange={handleTextChange}/>
            <ButtonGroup2Confirm/>
          </dialog> 
      }
    </div>
  )
}

export default App
