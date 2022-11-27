import { useState } from 'react'
import TextField from './components/TextField'
import ButtonPost from './components/ButtonPost'
import Note from './components/Note'
import TextFieldArea from './components/TextFieldArea'
import Button, {ButtonNotebook} from './components/Button'
import { SlAnchor, SlBell, SlBasket } from 'react-icons/sl'
import NavBar from './components/NavBar'

function App() {
  const initialTextState = {
    title:"Untitled",
    details:""
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

  function ButtonAnchor(){
    return <Button icon={<SlAnchor/>} onClick={saveTextToList}/>
  }

  //i think this is the way to go. the function that was imported to have one function declared like the below constant, and the other export which will be default export is the Button Function. 
  const ButtonBasket = ()=> <Button icon={<SlBasket/>} onClick={saveTextToList}/>
  

  function withLabel(Component){
    return function({label, ...rest }){
      return (
        <>
          <label>
            {label}
          </label>
          <Component {...rest}/>
        </>
      )
    }
  }

  function withLabelHello(Component){
    return function WrappedComponent(){
      return (<>
        <label className='block'>
          Hello
        </label>
        <Component/>
      </>)
    }
  }

  const ButtonBasketWithLabel = withLabelHello(ButtonBasket)
  const ButtonBasketWithLabel2 = withLabel(ButtonBasket)

  return (
    <div className='body container flex flex-col p-2 mx-auto h-screen max-w-screen-sm text-white bg-gray-700' >
      {/* <NavBar/> */}
      <h1 className='text-3xl font-bold pt-6 pb-3 text-center'>Project 1</h1>
      <div id="select-list-tab" className='flex flex-row'>
        <h2>To Do</h2>
        <h2 className='bg-gray-800 rounded-t-xl px-1'>In Progress</h2>
        {/* appearance like selectable tabs */}
        <h2>Done</h2>
      </div>
      <div className="container overflow-scroll flex flex-col flex-grow bg-gray-800 mx-auto p-1 mb-2 rounded-md">
        {list.map((elem, index)=>
          <Note key={index} id={index} entry={elem} onClick={removeTextFromList}/>
        )}
      </div>
      <div className='flex flex-col border rounded-md p-1'>
        <TextField name="title" value={text.title} onChange={handleTextChange} onKeyDown={keyDownHandler}/>
        <TextFieldArea name="details" value={text.details} onChange={handleTextChange}/>
        <div className='flex justify-end'>
          {/* <ButtonPost onClick={saveTextToList}/>
          <ButtonNotebook onClick={saveTextToList}/>
          <Button icon={<SlBell/>} onClick={saveTextToList}/> */}
          <ButtonAnchor/>
          <ButtonBasket/>
          <ButtonBasketWithLabel/>
          <ButtonBasketWithLabel2 label="Goodbye"/>
        </div>
      </div>
    </div>
  )
}






export default App
