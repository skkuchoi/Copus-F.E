import React from 'react';
import styled from 'styled-components';
import {AiFillBulb} from "react-icons/ai";
import {AiFillEdit} from "react-icons/ai";
import {AiOutlineFileAdd} from "react-icons/ai";
import freeWrite from './freeWrite.png';
import DataImg from './DataImg.png';
import variationImg from './variationImg.png';

const CardBlock = styled.div`
    //position : absolute; 
    display : flex;
    justify-content: center;
    align-items: center;
    margin: 10px 10%;
    gap : 20px;
    flex-direction: row;
    margin-top: 30px;
    background-color: rgba(188, 248, 183, 0.4);
    border-radius : 20px;
`

const Card = styled.div`
    height : 270px;
    width :  270px;
    background-color: none;
    border : none;
    border-color : #005666;
    display : flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Card2 = styled.div`
    height : 270px;
    width :  270px;
    background-color : none;
    //border-radius: 10px;
    border-style : none solid;
    border-color: #d3d3d3;
    display : flex;
    flex-direction: column;
    justify-content: center;
    align-items : center;
   
`

const TitleBlock = styled.div`
    display : flex;
    justify-content: center;
    align-items: center;
    font-size : 30px;
    font-weight : bold;
    text-decoration-line: underline;
    text-decoration-color: rgba(188, 248, 183, 0.4);
    text-decoration-thickness: 10px;
`

const CardFontBlock3 = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items: center;
    //margin-top : 10px;
    
`

const CardFontBlock2 = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items: center;
    margin-bottom : 43px;
    
`

const CardFontBlock1 = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items: center;
    margin-bottom : 21px;
`
const CardTitleStyle = styled.div`
    font-size: 20px;
    margin-left: 10px;
    //color : rgba(188, 248, 183, 0.4);
    font-weight : bold;
    margin-bottom : 10px;
`

const CardTextStyle1 = styled.div`
    font-size: 15px;
    margin-left: 10px;
    color : #222222;
    margin-top: 10px;
`

const CardTextStyle2 = styled.div`
    font-size: 15px;
    margin-left: 10px;
    color : #222222;
    margin-top : 10px;
    margin-left : 25px;
    margin-right : 20px;    
`
const FreeWriteImg = styled.div`
    height : 110px;
    width : 110px;
    background-image: url(${freeWrite});
    background-size: 100% 100%;
    margin-bottom : 10px;
`

const DataImg1 = styled.div`
    height : 130px;
    width : 130px;
    background-image: url(${DataImg});
    background-size: 100% 100%;
`

const VariationImg = styled.div`
    height : 110px;
    width : 110px;
    background-image: url(${variationImg});
    background-size: 100% 100%;
`

function WhatWeDo () {
    return (
    <>
    <TitleBlock>
        우리는 다음을 기대합니다
    </TitleBlock>
        <CardBlock>
            <Card>
                <FreeWriteImg />
                <CardFontBlock1>
                    <CardTitleStyle>자유로운 접근</CardTitleStyle>
                    <CardTextStyle1> 
                        여러 구성원이 토론이 가능한 온라인 플랫폼 안에서 데이터를 자유롭게 작성하고 열람할 수 있습니다.
                    </CardTextStyle1>
                </CardFontBlock1>
            </Card>
            <Card2>
                <CardFontBlock2>
                    <DataImg1/>
                    <CardTitleStyle>정제된 데이터</CardTitleStyle>
                    <CardTextStyle2>
                        작성된 다채로운 데이터들을 정제된 형태로 웹사이트에 공개합니다.
                    </CardTextStyle2>
                </CardFontBlock2>
            </Card2>
            <Card>
                <CardFontBlock3>
                    <VariationImg/>
                    
                    <CardTitleStyle> 다양한 형태의 구조화</CardTitleStyle>
                    
                    <CardTextStyle1>
                        원문을 다양한 형태로 구조화합니다. 텍스트 안의 고유명사 데이터에 대해 메타데이터를 제공하고 식별자를 붙여
                        검색과 열람 기능을 강화합니다.
                    </CardTextStyle1>
                </CardFontBlock3>
            </Card>
        </CardBlock>
    </>
    );
}

export default WhatWeDo ;