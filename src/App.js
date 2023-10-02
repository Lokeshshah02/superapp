import './App.css';
import RegisterPage from './components/HomeComponents/RegisterPage';
import Category from './components/HomeComponents/category/Category';
import { Routes, Route} from "react-router-dom";


function App() {
  return (
   <>
   <Routes> 
    <Route path='/' element={<RegisterPage/>}/>
    <Route path='/category' element={<Category/>}/>
   </Routes>
   </>
  );
}

export default App;
