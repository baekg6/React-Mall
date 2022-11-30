import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import HomePage from './pages/HomePage/HomePage';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import './app.css';
import OrderPage from './pages/OrderPage/OrderPage';

const GlobalStyle = createGlobalStyle`
    ${reset}
    *{
        box-sizing:border-box;
        font-family:'Spoqa Han Sans Neo', sans-serif;
    }
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                    <Route path="/order" element={<OrderPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
export default App;
