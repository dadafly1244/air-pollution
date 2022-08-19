import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EntireArea from './pages/EntireArea'
import Favorites from './pages/Favorites'
import MyArea from './pages/MyArea'
import Nav from './components/Nav'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/myarea" element={<MyArea />} />
        <Route path="/" element={<EntireArea />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      <Nav className="relative" />
    </BrowserRouter>
  )
}

export default App
