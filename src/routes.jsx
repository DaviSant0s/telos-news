import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import PostNews from './pages/postNews'
import Header from './components/header'
import HeaderNews from './components/headerNews'

export default function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Header/>} path='/' exact/>
            <Route element={<HeaderNews/>} path='/news' exact/>
        </Routes>
        <Routes>
            <Route element={<PostNews/>} path='/news' exact/>
            <Route element={<Home/>} path='/' exact/>
        </Routes>
    </BrowserRouter>
  )
}