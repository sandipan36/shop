import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar';
import About from './Component/About'
import Contact from './Component/Contact'
import Course from './Component/Course'
import Home from './Component/Home'
import Login from './Component/Login' 
import Footer from './Component/Footer';



function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element ={<About/>} />
                <Route path='/contact' element ={<Contact/>} />
                <Route path='/course' element ={<Course/>}/>
                <Route path='/login' element={<Login/>}/>
               
            </Routes>
            {/* <Footer/> */}
</BrowserRouter>
    
    </>
  );
}

export default App;
