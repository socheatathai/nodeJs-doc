import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Register from './components/Register';
import PageNotFound from './components/PageNotFound';
import "bootstrap/dist/css/bootstrap.min.css";
import {Route,Routes} from "react-router-dom"
function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route  path='/register' element={<Register/>}/>
      <Route  path='/pageNotFound' element={<PageNotFound/>}/>
    </Routes>
    
    
   
    </>
  );
}

export default App;
