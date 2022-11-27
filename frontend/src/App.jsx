import { useState } from 'react'
import TextField from './components/TextField'
import Button from './components/Button'
import Note from './components/Note'
import TextFieldArea from './components/TextFieldArea'

function App() {
  const initialTextState = {
    title:"type title here",
    details:"type details here"
  }
  const [text, setText] = useState(initialTextState)
  const [list, setList] = useState([])

  function saveTextToList(){
    setList(prevList=>[...prevList, text])
    setText(initialTextState)
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

  return (
    <div className='body container flex flex-col p-2 mx-auto h-screen max-w-screen-sm text-white bg-gray-700' >
      <nav className='container flex flex-row justify-between'>
        <NavbarLinks label="To Do List"/>
        <div className="flex">
          <NavbarLinks label="Log In"/>
          <NavbarLinks label="Log Out"/>
          <NavbarLinks label="Register"/>
          <NavbarLinks label="About"/>
        </div>
      </nav>
      <h1 className='text-3xl font-bold pt-6 pb-3 text-center'>To Do List</h1>

      <div className="container overflow-scroll flex flex-col flex-grow bg-gray-800 mx-auto p-1 mb-2 rounded-md">
        {list.map((elem, index)=>
          <Note key={index} id={index} entry={elem.title} onClick={removeTextFromList}/>
        )}
      </div>
      <div className='flex flex-col'>
        <TextField name="title" value={text.title} onChange={handleTextChange} onKeyDown={keyDownHandler}/>
        <TextFieldArea name="details" value={text.details} onChange={handleTextChange}/>
        <Button innerText="Post" onClick={saveTextToList}/>
      </div>
    </div>
  )
}

function NavbarLinks({href, label}){
  return (
    <a className="border block" href={href}> {label} </a>
  )
}





export default App
