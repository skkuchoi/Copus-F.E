import React, {useState} from 'react';
import styled from 'styled-components'
import HeaderBlock from '../../components/home/header/HeaderBlock/HeaderBlock';
import Introduction from '../../components/About/Introduction';
import Footer from '../../components/basic/Footer/Footer'
import WhatWeDo from '../../components/About/WhatWeDo';
import WhatIsCopus from '../../components/About/WhatIsCopus';
import CopusDestination from '../../components/About/CopusDestination';
import ConstructionProcess from '../../components/About/ConstructionProcess';
import { green } from '@mui/material/colors';

const ButtonStyle = styled.div`
    margin: 60px 10%;
    display: flex ;
    flex-direction: row;
`

const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height : 50px;
    width : 160px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    //border-style: solid;
    //border-width: 1px;
    background-color:${(props)=>props.color};
    &:hover{cursor:pointer;}
`
const WholeContainer = styled.div`
    //background-color: yellow;
    margin: 60px 10%;
    //margin-bottom : 40px;
    border-style : solid;
    border-color : lightgray;
    border-width : 2px;
    padding-bottom: 60px;
`

function About() {
const [menu, setMenu] = useState('first')

return(
<>    
{menu==='first' && (
    <> 
     <HeaderBlock/>
     <Introduction/>
     
     <ButtonStyle>
     <Button color={"rgba(188, 248, 183, 0.4)"} onClick={()=>setMenu('first')}>성균코퍼스 프로젝트란?</Button>
     <Button color={"lightgray"} onClick={()=>setMenu('second')}>성균코퍼스 구축과정</Button>
     </ButtonStyle>
     <WholeContainer>
     
     <WhatIsCopus/>
     <CopusDestination/>
     <WhatWeDo/>
     </WholeContainer>
     <Footer/>
    </> 
) } 
{menu==='second' && (
   <> 
    <HeaderBlock/>
    <Introduction/>
    <ButtonStyle>
    <Button color={"lightgray"} onClick={()=>setMenu('first')}>성균코퍼스 프로젝트란?</Button>
    <Button color={"rgba(188, 248, 183, 0.4)"} onClick={()=>setMenu('second')}>성균코퍼스 구축과정</Button>
    </ButtonStyle>
    <WholeContainer>
    <ConstructionProcess/>
    </WholeContainer>
    <Footer/>
   </> 
) } 
</>
);
}

export default About;