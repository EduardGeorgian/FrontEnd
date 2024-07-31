import { useState } from 'react';
import './App.css';
import React from 'react';
import LandingPage from './pages/LandingPage';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import OrderList from './components/order-list/OrderList';

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
                <Route path='/orders' Component={OrderList} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
