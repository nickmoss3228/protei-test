import './styles/App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Navbar from './components/Navbar'
import Mainpage from './pages/Mainpage'
import ATCAction from './pages/ATC-Action'

function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Mainpage />} />
          <Route path='/atcaction' element={<ATCAction/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
