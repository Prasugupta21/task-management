
import './App.css'
import {Routes,Route} from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
function App() {
  

  return (
    <>
      <Routes>

        <Route path="/signup" element={<Signup />}/> 
        <Route path='/' element={<Login/>}/>
        </Routes>

    </>
  )
}

export default App
