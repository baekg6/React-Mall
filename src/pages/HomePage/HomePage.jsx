import React from 'react';
import styled from 'styled-components';
import Cart from '../../components/Cart/Cart';
import ProductList from '../../components/ProductList/ProductList';

const ProductMain = styled.main`
    display: flex;
    justify-content: center;
    margin-top: 160px;
    padding-bottom: 156px;
`;

export default function HomePage() {
    return (
        <ProductMain>
            <ProductList />
            <Cart />
        </ProductMain>
    );
}
