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
  
  return (
    <div className='container text-center'>
      <h1 className='text-3xl font-bold underline mt-6 mb-3'>To Do List</h1>
      <TextField value={text} onChange={setText}/> 
      <Button innerText="Submit" onClick={saveTextToList}/>
      <div className="container">
        {list.map(elem=><Note entry={elem}/>)}
      </div>
    </div>
  )
}







export default App
