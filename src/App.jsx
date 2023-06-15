import NavBar from './components/NavBar'
import './App.css'
import MainContent from './components/MainContent'
import DeviceDetails from './components/DeviceDetails';
import Footer from './components/Footer';
import AboutUs from './components/aboutUs';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import ContactPage from './components/Contact';
import React, { useState } from 'react';

export const queryContext = React.createContext();

function App() {

  const [searchQuery, setSearchQuery] = useState('');
function queryHandler(query) {
    setSearchQuery(query);
}

  return (
    <queryContext.Provider value={searchQuery}>
      <BrowserRouter>
       <NavBar queryHandler={queryHandler}/>
       <Routes>
       <Route exact path='/' element={<MainContent/>}></Route>
       <Route path='device/:id' element={<DeviceDetails/>}></Route>
       <Route path='contact' element={<ContactPage/>}></Route>
       <Route path='aboutUs' element={<AboutUs/>}></Route>
       </Routes>
       <Footer/>
      </BrowserRouter>
    </queryContext.Provider>
  )
}

export default App
