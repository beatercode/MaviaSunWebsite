import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../components/plasmic/mavia_sun/PlasmicHomepage';
import Login from '../components/Login';

const Main = () => {
    return (
        <Home />
        /*
        <Routes> 
            <Route path='/' element={<Home />} />
            <Route path='/' element={<Home />} />
            <Route path='teamzone' element={<Login />} />
            <Route element={Home} />
        </Routes>
        */
    );
}

export default Main;