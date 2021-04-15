import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const LogoContainer = styled.div`;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LogoImage = styled.img`
    width: ${props=>props.width}px;
    object-fit: contain;
`;

//props
const Logo = ({
    image="logo.png",
    width="240",
    routeTo=""
}) => {
    const router = useRouter();
    return <LogoContainer onClick={()=>router.push(routeTo)}>
        <LogoImage src={image} width={width}/>
    </LogoContainer>
}

export default Logo;