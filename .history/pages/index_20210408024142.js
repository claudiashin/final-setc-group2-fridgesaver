import Head from 'next/head'
import Message from '../comps/Message'
import Ingredient from '../comps/Ingredient'
import Direction from '../comps/Directions'
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
    <Message />

  <Ingredient/>

    <div className = "bottom">
      
 

    <Direction /> 
      <div className ="left">

      </div>


      <div className ="right">
 
      </div>

    </div>

 </HomeCont>   
}

