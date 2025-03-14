import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { SignUp } from './pages/signup'
import { SignIn } from './pages/signin'
import { Dashboard } from './pages/dashboard'
import { Home } from './pages/home'

function App() {
  return (<BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/signin' element={<SignIn />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
      </Routes>
    </BrowserRouter>)
}

export default App
