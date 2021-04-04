import React from 'react';
import styled from 'styled-components';

const ButtonInput = styled.button`
    background-color:#B4E2B9;
    color:#000000;
    border:2px solid #F7FFC5;
    box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);
    width:200px;
    height:40px;
    font-family: 'Athiti', sans-serif;
    font-weight: 700;
    font-size: 16px;
    text-align: center;
`;

const StartButton = () => {
    return <div>
        {/* <button style={{
            backgroundColor:"#B4E2B9",
            color:"#000000",
            border:"2px solid #F7FFC5",
            boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25",
            width:"200px",
            height:"40px"
        }}>Test Button</button> */}
        <ButtonInput>
            Test Button
        </ButtonInput>
    </div>
}

export default StartButton;