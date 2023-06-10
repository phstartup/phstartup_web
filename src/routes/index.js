import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
// import Route from './route';
import Home from "@/pages/home";

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        {/* <Route path="/dashboard" exact component={Dashboard} isPrivate /> */}
        <Route element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}