

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Product from './components/Product';
import Client from './components/Client';
import Creative from './components/Creative_Gallary';
import Resourse from './components/Resourse';
import Company from './components/company';

import './App.css'

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />} />
        <Route path='/Product' element={<Product />} />
        <Route path='/Client' element={<Client />} />
        <Route path='/Creative' element={<Creative />} />
        <Route path='/Resourse' element={<Resourse />} />
        <Route path='/Company' element={<Company />} />
      </Routes>

    </BrowserRouter>

  )
}

export default App;
