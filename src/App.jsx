import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EntireArea from './pages/EntireArea'
import Favorites from './pages/Favorites'
import MyArea from './pages/MyArea'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyArea />} />
        <Route path="/entire-area" element={<EntireArea />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
