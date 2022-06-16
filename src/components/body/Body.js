import React from 'react';
import Menu from './Menu';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Page404 from './Page404';
import { Route, Routes } from "react-router-dom";

const Body = () => {
    return (
        <div>
            {/* <Menu /> */}
            <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/menu" element={<Menu />}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/*" element={<Page404/>}/>
        </Routes>
        </div>
    );
};

export default Body;