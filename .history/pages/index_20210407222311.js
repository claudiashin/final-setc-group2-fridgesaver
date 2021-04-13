import Head from 'next/head'
import Card from '../comps/Navigation'
import styled from 'styled-components'
import React,{useState} from 'react'

const HomeCont = styled.div`
.header{
  display:flex;
  justify-content:center;
  align-items:center;
  padding:10px;
}

.bottom{

   display:flex;

  .left{
   display:flex;
   flex-direction:column;
   padding:10px;
  }

  .right{
   padding:10px;
  }

}
`

export default function Home() {

  const[menustate,setMenuState]=useState(false);
  const[state,CheckPoint] = useState(false);
  
 

  const HandleClick =()=>{
    // menustate = true
    CheckPoint(!state);
  }

  return  <HomeCont>
    <Head>
      <title>Home page</title>
    </Head>   

    <div className = "navigation">Home page</div>
  
    <div className = "bottom">
      <div className ="left">

      </div>

      <div className ="right">
        <Card 
        // left ={state ? 50:10}
        width ={state ? 300:500}
        height ={state? 300:500}
        opacity={state ? 0.5:0.3}
        subtext = "welcome to my app"
        bigtext = "you can be who you are"/>
      </div>

    </div>

 </HomeCont>   
}

