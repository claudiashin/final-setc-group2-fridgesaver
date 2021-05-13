import styled from 'styled-components';
import Footer from '../../comps/Footer';
import React, {component, useState} from 'react';
import Button from '../../comps/Buttons';
import {useRouter} from 'next/router';
import Navbar from "../../comps/Navigation"
import StartButton from '../../comps/Startbutton';


const HomeCont = styled.div`
    background-color: #FFF8F8;
    display: flex;
    flex-direction: column;
    padding-bottom: 200px;


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
    .column{
        display:flex;
        flex-direction:column;
        align-items: center;
    }
    .row{
      display:flex;
      max-width: 310px;
      font-family: 'Athiti', sans-serif;
      font-size: 16px;
      text-align: center;
      color: #DB5959;
      margin-top: 15px;
      margin-bottom: 20px;
    }

    .tutorialbutton {
        margin-top: 60px;
    }
`;


const  issue = {
    topic1: {
        topic:"In Canada, the amount of food waste Canadians produce costs Canada’s economy roughly an estimated $49 billion a year. About 63% of the food that is thrown away could be eaten or used in some sort of way such as putting it in the freezer, making leftovers, and adding it to recipes. In a Canadian household, each family will waste about 140 kilograms of food on average; therefore, resulting in a total of $1,100 per year and approximately $100 per month Average Canadian wastes 140kg of food in a year "
    },
    topic2: {
        topic:"One of the leading contributors to gas emissions would be from our foods and how we process them. From the moment we harvest our plants or meats; to the processing stage, distribution, and finally decomposition, each step of these processes affects our climate on a global scale. When we burn fossil fuels such as coal or oil, it creates greenhouse gas emissions such as methane, nitrous oxide and ozone."
    },
    topic3: {
        topic:"According to Change for Climate, “wasted food that ends up in the garbage, and ultimately the landfill, produces methane—a greenhouse gas that is 21 times more potent than carbon dioxide. It’s estimated that 7% of greenhouse gases produced globally are due to preventable food waste” (Change for Climate, 2017-2018)."
    },
    topic4: {
        topic:"Although solving food waste is an absolutely broad and complex problem around the world, we still have a chance that can help reduce the food waste as an individual. Small steps go a long way, thus it will naturally help people be aware of the problems. "
    }
}

export default function Home() {
    const router = useRouter();
    const {facts} = router.query; 
    var text = "text"

   if(facts === 'topic1'){
     text = issue.topic1.topic
   }

   if(facts === 'topic2'){
    text = issue.topic2.topic
    }
   if(facts === 'topic3'){
    text = issue.topic3.topic
    }
    if(facts === 'topic4'){
        text = issue.topic4.topic
    }



    return <HomeCont>
       
        <Navbar onClick={()=>router.push("/options/option1")} />
            <div className = "column">
                <div className="logo">
                    <img src="/Logo.png" />
                </div>
                <div className = "title">
                    Facts - eco probs
                </div>
                <div className = "row">
                    {text}
                </div>
                <Button onClick = {()=>router.push("/facts/topic1")}/>
                <Button text = {"Topic2"}onClick =  {()=>router.push("/facts/topic2")}/>
                <Button text = {"Topic3"}onClick = {()=>router.push("/facts/topic3")}/>
                <Button text = {"Topic4"}onClick  = {()=>router.push("/facts/topic4")}/>

                <div class="tutorialbutton">
                <StartButton text="Go to Tutorial" width="260px" routeTo="/tutorial"/>
                </div>
            </div> 
        <Footer />
    </HomeCont>
}
