import { Routes, Route } from 'react-router-dom';  
import MenuMobile from './components/Silder'; // مطمئن شوید که نام فایل صحیح است  
import About from './components/About'; // فقط این ورودی را نگه دارید 
import Setting from './components/Setting'; 
import OrginallPagte from "./components/OrginallPage"
import './App.css'
function App() {  
  return (  
    <div>  
      <Routes>  
        <Route path="/" element={<OrginallPagte />} />  
        <Route path="/About" element={<About />} />  
        <Route path="/Silder" element={<MenuMobile />} />   
        <Route path='/Setting' element={<Setting />}></Route>
      </Routes>  
    </div>  
  );  
}  

export default App;  