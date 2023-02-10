import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Info from './components/Info';
import Prueba from './components/Prueba';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path='/' element={<Home/>} /> 
            <Route path='/info' element={<Info/>} />
            <Route path='/prueba' element={<Prueba/>} /> 
          </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
