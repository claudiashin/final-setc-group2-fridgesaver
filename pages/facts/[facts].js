import styled from 'styled-components';
import Navbar from '../../comps/Navigation'
import Developer from '../../comps/Developer'
import Info from '../../comps/Information'
import Footer from '../../comps/Footer'
import React, {component, useState} from 'react';
import Button from '../../comps/Buttons';

const HomeCont = styled.div`
    background-color: #FFF8F8;
    display: flex;
    flex-direction: column;
    align-items: center;

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
        display:flex;
        max-width: 310px;
        font-family: 'Athiti', sans-serif;
        font-size: 16px;
        text-align: center;
        color: #DB5959;
        margin-top: 15px;
        margin-bottom: 20px;
    }

    .title{
        font-family:"Permanent Marker"
    }
`;

const  issue = {
    text: {
        topic:"Average Canadian wastes 140kg of food in a year ",
    }
}

export default function Home() {
    const router = useRouter();
    const {facts} = router.query; 



   if(facts === 'topic1')


    return <HomeCont>
        <div className="logo">
            <img src="/Logo.png" />
        </div>
        <div className = "title">
            Facts - eco probs
        </div>
        <div className="info">
         In Canada, the amount of food waste Canadians produce costs Canada's economy roughly an estimated $49 billion a year. About 63% of the food that is thrown away could be eaten or used. Bringing awareness to the problem could reduce the amohnt of food waste in our society. By using a tool, they have the ability to interact and visually see how they could make better use of the resources at hand.
        </div>

        <Button/>
        <Button/>
        <Button/>
        <Button/>

        <Footer />
    </HomeCont>
}
