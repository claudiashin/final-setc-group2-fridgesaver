import styled from 'styled-components';
import Navbar from '../comps/Navigation'
import Developer from '../comps/Developer'
import Info from '../comps/Information'
import React, {component, useState} from 'react';

const HomeCont = styled.div`
    height: 812px;
    background-color: #FFF8F8;

    display: flex;
    flex-direction: column;
    align-items: center;

    .navbar {
        width: 100%;
        height: 40px;
        background-color: #9FCDA4;
    }

    .logo {
        width: 250px;
        height: 250px;
        margin-top: 20px;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .info {
        width: 328px;
        font-family: 'Athiti', sans-serif;
        font-size: 16px;
        text-align: center;
        color: #DB5959;
        overflow: scroll;
        margin-top: 15px;
        margin-bottom: 20px;

    }
`;

export default function Home() {
    return <HomeCont>
        <div className="navbar"></div>
        <div className="logo">
            <img src="/Logo.png" />
        </div>
        <div className="dev">
            <Developer 
                name1="Iori Takeshita: Developer" 
                name2="Claudia Shin: Designer" 
                name3="Maggie Su: Project Manager"
                name4="Leighai Nishibata: UI/UX" 
                // content1=""
                // content2=""
                // content3=""
                // content4=""
                />
        </div>
        <div className="info">
         In Canada, the amount of food waste Canadians produce costs Canada's economy roughly an estimated $49 billion a year. About 63% of the food that is thrown away could be eaten or used. Bringing awareness to the problem could reduce the amohnt of food waste in our society. By using a tool, they have the ability to interact and visually see how they could make better use of the resources at hand.
        </div>
    </HomeCont>
}
