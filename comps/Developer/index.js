import React from 'react';
import styled from 'styled-components';
// import {useRouter} from 'next/router';

const DeveloperCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const HeadDeveloper = styled.h3 `
    font-family: 'Permanent Marker', cursive;
    font-variant: small-caps;
    font-style: italic;
`;

const NameDeveloper = styled.h4`
    margin: 5px;
    font-family: 'Athiti', sans-serif;
`;

const Developer = ({
    name1="first-lastname",
    name2="first-lastname" ,
    name3="first-lastname" ,
    name4="first-lastname"   
}) => {
    // const router = useRouter();
    return <DeveloperCont>
            <HeadDeveloper>Developed By</HeadDeveloper>    
            <NameDeveloper>{name1}</NameDeveloper>
            <NameDeveloper>{name2}</NameDeveloper>
            <NameDeveloper>{name3}</NameDeveloper>
            <NameDeveloper>{name4}</NameDeveloper>
    </DeveloperCont> 
}

export default Developer;