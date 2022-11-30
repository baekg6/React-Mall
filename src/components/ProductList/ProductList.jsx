import React from 'react';
import styled from 'styled-components';
import ProductItem from '../ProductItem/ProductItem';

const ProductListBlock = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 60px;
    width: 1260px;
    margin-right: 60px;
`;

export default function ProductList({ products }) {
    return (
        <ProductListBlock>
            {products.map((product) => (
                <ProductItem key={product.id} item={product} />
            ))}
        </ProductListBlock>
    );
}
