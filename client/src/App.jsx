import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Project from './components/Project'
import ProjectHandler from './components/ProjectHandler'
import Newproject from './components/Newproject'
import FromSig from './components/FromSig'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/main' element={<ProjectHandler></ProjectHandler>}></Route>
        <Route path='/' element={<Project></Project>}></Route>
        <Route path='/new' element={<Newproject></Newproject>}></Route>
        <Route path='/sign' element={<FromSig></FromSig>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
