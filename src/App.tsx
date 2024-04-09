
import './App.css'
import { Error } from './components/pages/error'
import './components/header.css'
import { Main } from './components/pages/main'
import { About } from './components/pages/about'
import {Routes, Route} from 'react-router-dom'
import { Layout } from './components/pages/layout'
import { UserPage } from './components/pages/userPage'
import { PrivateRoute } from './components/pages/privateRoute'
import { Login } from './components/pages/login'

function App() {  

  return (
    <>
   
    <Routes>
    <Route element={<Layout />}>
    <Route path="/" element={<Main />} />
    <Route path="/about" element={<About />} />
    <Route  element={<PrivateRoute />}> 
    <Route path="/UserPage" element={<UserPage/>} />
    
    </Route>
    <Route path="/login" element={<Login />} />
    </Route>
    <Route path="*" element={<Error />} />
    </Routes>
     
      
      
    </>
  )
}

export default App
