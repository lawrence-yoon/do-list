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
    if(keyPress=="Enter"){
      saveTextToList()
    }
  }

  return (
    <div className='body container flex flex-col p-2 mx-auto h-screen max-w-screen-sm text-white bg-gray-700' >
      <h1 className='text-3xl font-bold underline pt-6 pb-3 text-center'>To Do List</h1>

      <div className="container overflow-scroll flex flex-col flex-grow bg-gray-800 mx-auto p-1 mb-2 rounded-sm">
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







export default App
