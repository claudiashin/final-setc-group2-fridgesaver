import React from 'react';
import styled from 'styled-components';

// Line Component

const LineBorder = styled.div`
    display: flex;
    background-color: ${props=>props.background};
    width: 100%;
    height: ${props=>props.height};
`;
// pass LineBgColor to container ${props=>props.background}
//background is name

//props
//LineBgColor is value
const Line = ({
    LineBgColor="#E1E1E1",
    LineHeight="15px",
}) => {
    return <LineBorder 
        background={LineBgColor}
        height={LineHeight}>
    </LineBorder>
}

export default Line;
