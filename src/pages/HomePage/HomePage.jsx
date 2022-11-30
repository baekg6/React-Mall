import React from 'react';
import styled from 'styled-components';

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
