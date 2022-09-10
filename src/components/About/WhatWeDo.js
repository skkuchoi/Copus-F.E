import React from 'react';
import styled from 'styled-components';

const CardBlock = styled.div`
    display : flex;
    justify-content: center;
    align-items: center;
    gap : 20px;
`

const Card = styled.div`
    height : 200px;
    width :  350px;
    background-color : orange;
`
const Card2 = styled.div`
    height : 200px;
    width :  350px;
    background-color : orange;
`
const Card3 = styled.div`
    height : 200px;
    width :  350px;
    background-color : orange;
`

const TitleBlock = styled.div`
    display : flex;
    justify-content: center;
    align-items: center;
`

function WhatWeDo () {
    return (
     <>
        <TitleBlock>
        <h1>What We Do</h1>
        </TitleBlock>
        
        <CardBlock>
            <Card/>
            <Card2/>
            <Card3/>
        </CardBlock>
        
        </>
    );
}

export default WhatWeDo ;