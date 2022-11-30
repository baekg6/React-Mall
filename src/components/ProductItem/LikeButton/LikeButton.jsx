import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import HeartIcon from '../../../assets/images/icon-heart.svg';
import HeartOnIcon from '../../../assets/images/icon-heart-on.svg';

const LikeButtonCont = styled.button`
    width: 22px;
    height: 22px;
    border: none;

    background: url(${HeartIcon}) no-repeat center / contain;
    ${(props) =>
        props.like &&
        css`
            background: url(${HeartOnIcon}) no-repeat center / contain;
        `}
    position: absolute;
    right: 0;
    bottom: 40px;
`;

export default function LikeButton() {
    const [like, setLike] = useState(false);
    const onToggle = () => {
        setLike(!like);
    };
    return <LikeButtonCont like={like} onClick={onToggle}></LikeButtonCont>;
}
