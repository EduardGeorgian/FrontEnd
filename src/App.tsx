import React from 'react';
import './App.css';
import LandingPage from './pages/LandingPage';
import ProductPage from './pages/ProductPage';
import OrderList from './components/order-list/OrderList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { OrderProvider } from './OrderContext'; // Import OrderProvider

function App() {
    return (
        <OrderProvider>
            {' '}
            {/* Include OrderProvider la nivelul cel mai înalt */}
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LandingPage />} />
                    <Route path='/product/:foodName' element={<ProductPage />} />
                    <Route path='/orders' element={<OrderList />} />
                </Routes>
            </BrowserRouter>
        </OrderProvider>
    );
}

export default App;
