import { useState } from 'react';
import './App.css';
import React from 'react';
import LandingPage from './pages/LandingPage';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import ProductPage from './pages/ProductPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    element={
                        <>
                            <LandingPage />
                        </>
                    }
                />
                <Route path='/product/:foodName' element={<ProductPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
