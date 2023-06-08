import React from "react";
import { Route, Routes } from "react-router-dom";
import { Contact } from '../screens/contact'
import { Home } from '../screens/home'
import { About } from '../screens/about'
const Routing = () => (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
    </Routes>
);

export {Routing}
