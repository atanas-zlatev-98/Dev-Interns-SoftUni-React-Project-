
import './App.scss'
import Login from './components/auth/login/Login.jsx';
import { Register } from './components/auth/register/Register.jsx';
import ApplicationDetails from './components/details/application-details/ApplicationDetails.jsx';
import Home from './components/home/Home.jsx';
import NavBar from './components/navigation/NavBar.jsx';
import { Routes,Route } from "react-router-dom";

function App() {

  return (
    <>
      <div className='main'>
        <NavBar></NavBar>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/application/details/:appId" element={<ApplicationDetails/>}/>
          </Routes>


      </div>
    </>
  )
}

export default App
