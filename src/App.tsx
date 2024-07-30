
import './App.css'
import { NavBar } from './components/NavBar'
import { PlayList } from './components/ListSections'
import { PlayerSection } from './components/PlayerSection'
import { songList } from './data'

function App() {

  return (
    <>
      <NavBar />
      <main className='main-layout'>
        <PlayList data={songList}/>
        <PlayerSection data={songList[0]}/>
      </main>
    </>
  )
}

export default App
