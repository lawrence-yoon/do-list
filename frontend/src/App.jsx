import useLocalStorage from '../src/hooks/useLocalStorage'
import List from './components/List'

function App() {
  const [listDo, setListDo] = useLocalStorage("listDo", [])
  const [listDoing, setListDoing] = useLocalStorage("listDoing", [])
  const [listDone, setListDone] = useLocalStorage("listDone", [])


  return (
    <>
      <div className='container h-screen max-w-max flex flex-row mx-auto'>
      {/* maybe pass the setter for each of these into each other. three setters in one component. 
          that way when the modals or whatever fire in List, the setters for the other lists are available. */}
        <List list={listDo} setList={setListDo} label="✍️ Do List"/>
        <List list={listDoing} setList={setListDoing} label="✍️ Doing List"/>
        <List list={listDone} setList={setListDone} label="✍️ Done List"/>
      </div>
    </>
  )
}

export default App
