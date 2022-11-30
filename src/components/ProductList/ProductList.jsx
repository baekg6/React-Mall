import React from 'react';
import styled from 'styled-components';

const ProductListBlock = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 60px;
    width: 1260px;
    margin-right: 60px;
`;

export default function ProductList({ products }) {
    return <ProductListBlock>ProductList</ProductListBlock>;
}
