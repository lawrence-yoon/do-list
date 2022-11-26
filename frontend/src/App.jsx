import { useState } from 'react'
import TextField from './components/TextField'
import Button from './components/Button'
import Note from './components/Note'

function App() {
  const [text, setText] = useState("")
  const [list, setList] = useState([])

  function saveTextToList(){
    setList([...list, text])
    setText("")
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
          <Note key={index} id={index} entry={elem} onClick={removeTextFromList}/>
        )}
      </div>
      <div className='flex justify-center'>
        <TextField value={text} onChange={setText} onKeyDown={keyDownHandler}/> 
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
