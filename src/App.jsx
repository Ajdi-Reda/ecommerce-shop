import NavBar from './components/NavBar'
import './App.css'
import MainContent from './components/MainContent'
import DeviceDetails from './components/DeviceDetails';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactPage from './components/Contact';
import React, { useState } from 'react';

export const Context = React.createContext();

function App() {

  const [searchQuery, setSearchQuery] = useState('');
  const [category, setcategory] = useState('');

function queryHandler(query) {
    setSearchQuery(query);
}
function categoryHandler(category) {
    setcategory(category);
}

const contextValue = {
    searchQuery,
    category,
  };



  return (
    <Context.Provider value={contextValue}>
      <BrowserRouter>
       <NavBar queryHandler={queryHandler}/>
       <Routes>
       <Route exact path='/' element={<MainContent categoryHandler={categoryHandler}/>}></Route>
       <Route path='device/:id' element={<DeviceDetails/>}></Route>
       <Route path='contact' element={<ContactPage/>}></Route>
       <Route path='aboutUs' element={<AboutUs/>}></Route>
       </Routes>
       <Footer/>
      </BrowserRouter>
    </Context.Provider>
  )
}

export default App
