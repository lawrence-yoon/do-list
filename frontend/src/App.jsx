import useLocalStorage from '../src/hooks/useLocalStorage'
import List from './components/List'

function App() {
  const [listDoing, setListDoing] = useLocalStorage("listDoing", [])
  const [listDo, setListDo] = useLocalStorage("listDo", [])
  const [listDone, setListDone] = useLocalStorage("listDone", [])


  return (
    <>
      <div className='container h-screen max-w-max flex flex-row gap-10 mx-auto'>
        <List list={listDo} setList={setListDo} label="✍️ Do List"/>
        <List list={listDoing} setList={setListDoing} label="✍️ Doing List"/>
        <List list={listDone} setList={setListDone} label="✍️ Done List"/>
      </div>
    </>
  )
}

export default App
