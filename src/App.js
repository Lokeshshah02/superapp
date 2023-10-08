import './App.css';
import RegisterPage from './components/Resgister/RegisterPage';
import Category from './components/Category/Category';
import { Routes, Route} from "react-router-dom";
import Details from "./components/Detail/Details"

function App() {
  return (
   <>
   <Routes> 
    <Route path='/' element={<RegisterPage/>}/>
    <Route path='/category' element={<Category/>}/>
    <Route path='/details' element={<Details/>}/>
   </Routes>
   </>
  );
}

export default App;
