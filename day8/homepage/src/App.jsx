import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
// 연결할 페이지들
import Home from './components/Home'
import About from './components/About'
import Nav from './components/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          {/* <Route path='경로명' element={컴포넌트 명}/> */}
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
