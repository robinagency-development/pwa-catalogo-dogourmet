import { useState, useMemo } from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './views/Home'
import NotFound from './views/NotFound'
import Champs from './views/Champs'
import Dogourmet from './views/Dogourmet'
import Donkat from './views/Donkat'
import Ohmygat from './views/Ohmygat'
import Supercan from './views/Supercan'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/champs" element={<Champs />} />
        <Route path="/dogourmet" element={<Dogourmet />} />
        <Route path="/donkat" element={<Donkat />} />
        <Route path="/ohmygat" element={<Ohmygat />} />
        <Route path="/Supercan" element={<Supercan />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App