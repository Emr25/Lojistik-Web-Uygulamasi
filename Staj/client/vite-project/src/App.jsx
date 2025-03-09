import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import SignUp from './components/Sign';
import Login from './components/Login';
function App() {
  

  return (
    <div className="App">
    <Header />
    
    <Routes>
      
      <Route path='/' element={<HomeScreen />} />
      <Route path='/login' element={ <Login/>} />
      <Route path='/signup' element={<SignUp />} />
     
      
    </Routes>
  </div>
  )
}

export default App
