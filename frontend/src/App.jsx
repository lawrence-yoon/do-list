import { useState } from 'react'
import TextField from './components/TextField'
import ButtonPost from './components/ButtonPost'
import Note from './components/Note'
import TextFieldArea from './components/TextFieldArea'
import Button, {ButtonNotebook, ButtonConfirm, ButtonCancel} from './components/Button'
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

  function ButtonGroup2(Component1, Component2){
    return (
      <div className='flex justify-end flex-wrap'>
        <Component1/>
        <Component2/>
      </div>
    )
  }

  const ButtonGroup2Confirm = () => ButtonGroup2(ButtonAnchor, ButtonBasket)

  return (
    <div className='body container flex flex-col p-2 mx-auto h-screen max-w-screen-sm text-white bg-gray-700' >
      {/* <NavBar/> */}
      <h1 className='text-3xl font-bold pt-6 pb-3 text-center'>Project 1</h1>
      <div id="select-list-tab" className='flex flex-row'>
        <h2>To Do</h2>
        <h2 className='bg-gray-800 rounded-t-xl px-1'>In Progress</h2>
        {/* appearance like selectable tabs */}
        <h2>Done</h2>
        <ButtonGroup2Confirm/>
      </div>
      <div className="container overflow-scroll flex flex-col flex-grow bg-gray-800 mx-auto p-1 mb-2 rounded-md">
        {list.map((elem, index)=>
          <Note key={index} id={index} entry={elem} onClick={removeTextFromList}/>
        )}
      </div>
      <div className='flex flex-col border rounded-md p-1'>
        <TextField name="title" value={text.title} onChange={handleTextChange} onKeyDown={keyDownHandler}/>
        <TextFieldArea name="details" value={text.details} onChange={handleTextChange}/>
        {/* TESTTTTTTTTTTTTTTTT */}
        {/* <div className='flex justify-end flex-wrap'>
          <ButtonAnchor/>
          <ButtonBasket/>
          <ButtonBasketWithLabel/>
          <ButtonBasketWithLabel2 label="Goodbye"/>
          <ButtonWithLabel label="button" icon={<SlBasket/>} onClick={saveTextToList}/>

        </div> */}
        <ButtonGroup2Confirm/>

        {/* TESTTTTTTTTTTTTTTT */}
      </div>
    </div>
  )
}

export default App
