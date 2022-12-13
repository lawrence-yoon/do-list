import useLocalStorage from '../src/hooks/useLocalStorage'
import List from './components/List'

function App() {
  const initialListState = [
    {title:"", details:""}
  ]

  const [listDo, setListDo] = useLocalStorage("listDo", initialListState)
  const [listDoing, setListDoing] = useLocalStorage("listDoing", initialListState)
  const [listDone, setListDone] = useLocalStorage("listDone", initialListState)


  return (
    <div className='bg-orange-300 h-screen'>
      <header className='bg-orange-500 flex flex-row justify-between items-center h-10 p-5'>
        <h1 className='text-4xl'>TaskBoard</h1>
        <div className='flex gap-20'>
          <a className='text-2xl'>Login</a>
          {/* <a className='text-2xl'>Logout</a> */}
          <a className='text-2xl'>Register</a>
        </div>
      </header>
      <div className='flex flex-row items-start justify-center py-5 md:gap-3'>
        <List list={listDo} setList={setListDo} setListLeft={setListDone} setListRight={setListDoing} label="✍️ Do List"/>
        <List list={listDoing} setList={setListDoing} setListLeft={setListDo} setListRight={setListDone} label="✍️ Doing List"/>
        <List list={listDone} setList={setListDone} setListLeft={setListDoing} setListRight={setListDo} label="✍️ Done List"/>
      </div>
    </div>
  )
}

export default App
