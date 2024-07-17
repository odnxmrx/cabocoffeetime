// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './modules/components/Header/Header'
import MapLocation from './modules/components/MapLocation/MapLocation'
import BigTextCentered from './shared/components/BigTextCentered/BigTextCentered'
import Navbar from './shared/components/NavBar/NavBar'
import Footer from './modules/components/Footer/Footer'

function App() {

  function handleClick() {
    alert('hello');
    // navigate('/')
  }


  return (
    <>
      <Routes>
        <Route path='/' element={
          <>
            <Navbar />
            <Header handleClick={handleClick} />
            <BigTextCentered />
            <MapLocation />
            <Footer />
          </>
        } />
      </Routes>
    </>
  )
}

export default App
