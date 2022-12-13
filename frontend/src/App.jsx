import useLocalStorage from '../src/hooks/useLocalStorage'
import List from './components/List'

function App() {
  const [listDo, setListDo] = useLocalStorage("listDo", [])
  const [listDoing, setListDoing] = useLocalStorage("listDoing", [])
  const [listDone, setListDone] = useLocalStorage("listDone", [])


  return (
    <>
      <div className='flex flex-row items-start justify-center'>
        <List list={listDo} setList={setListDo} setListLeft={setListDone} setListRight={setListDoing} label="✍️ Do List"/>
        <List list={listDoing} setList={setListDoing} setListLeft={setListDo} setListRight={setListDone} label="✍️ Doing List"/>
        <List list={listDone} setList={setListDone} setListLeft={setListDoing} setListRight={setListDo} label="✍️ Done List"/>
      </div>
    </>
  )
}

export default App
