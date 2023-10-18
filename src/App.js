import './App.css';
import RegisterPage from './components/Resgister/RegisterPage';
import Category from './components/Category/Category';
import { Routes, Route} from "react-router-dom";
import Details from "./components/Detail/Details"
import Movies  from './components/MoviePage/Movies';

function App() {
  return (
   <>
   <Routes> 
    <Route path='/' element={<RegisterPage/>}/>
    <Route path='/category' element={<Category/>}/>
    <Route path='/details' element={<Details/>}/>
    <Route path='/movies' element={<Movies/>}/>
   </Routes>
   </>
  );
}

export default App;
