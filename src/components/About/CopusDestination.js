import React from 'react';
import styled from 'styled-components';
import hatImg from './hatImg.png';
import collaboration from './collaboration.png';
import plusImg from './plusImg.png';
import glassImg from './glassImg.png';

const IntroBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 60px 10%;
  flex-direction: column;
`

const TitleBlock = styled.div`
    display : flex;
    justify-content: center;
    align-items: center;
    font-size : 30px;
    font-weight : bold;
    text-decoration-line: underline;
    text-decoration-color: rgba(188, 248, 183, 0.4);
    text-decoration-thickness: 5px;
`

const TextWholeBlock = styled.div`
    display : flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const ContentBlock =styled.div`
    display :flex;
    flex-direction : column;
`

const TextBlock = styled.div`
    display : flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom : 10px;
    margin-top: 10px;
`

const TextStyle = styled.div`
    font-size : 15px;
    margin-left : 10px;
`

const TextStyle2 = styled.div`
    font-size : 15px;
    margin-left : 10px;
`

const GlassImg = styled.div`
    height : 100px;
    width : 140px;
    background-image: url(${glassImg});
    background-size: 100% 100% ;
    //background-color: yellow;
    //box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
    //border-radius: 100%;
    //margin-right : 10px;
`

const PlusImg = styled.div`
    height : 100px;
    width : 270px;
    background-image: url(${plusImg});
    background-size: 100% 100%;
    //background-color: yellow;
    //box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
    //border-radius: 100%;
`

const CollaborationImg = styled.div`
    height : 100px;
    width : 240px;
    background-image: url(${collaboration});
    background-size: 100% 100%;
    //background-color: white;
    //box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
    //border-radius: 100%;
`

const HatImg = styled.div`
    height : 100px;
    width : 300px;
    background-image: url(${hatImg});
    background-size: 100% 100%;
    //background-color: white;
    //box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
    //border-radius: 100%;
`

function CopusDestination(){
    return(
        <IntroBlock>
            <TitleBlock>
                성균코퍼스는 다음의 목적을 가집니다.
            </TitleBlock>
            <TextWholeBlock>
                    
                    <TextBlock>
                        <GlassImg />
                        <TextStyle>
                            본 프로젝트를 통해 한국 문집총간, 연행록 등 다양한 한문 텍스트들을 웹 환경에서 열람할 수 있도록
                            할 뿐 아니라 각종 정보를 담고 있는 하나의 귀중한 데이터로 다룰 수 있는 환경을 만들고자 하였습니다.
                        </TextStyle>
                    </TextBlock>
                    <TextBlock>
                        <TextStyle>
                            기존 DB의 자료들에 더욱 구체적인 메타데이터를 추가하고 이에 대한 검색 및 대량의 데이터 수집이
                            편리하도록 수정하여 사용자 친화적인 사이트를 구축하였습니다. 또한 기존에 이미 구축되어 있었으나
                            활용이 어려웠던 여러 기능을 기술에 능숙하지 않은 사용자들도 편리하게 활용할 수 있도록 사용자 환경을
                            계산하였습니다.
                        </TextStyle>
                        <CollaborationImg />
                    </TextBlock> 
                    <TextBlock>  
                        <PlusImg/>
                        <TextStyle>
                            웹 데이터베이스 환경 외에 교육용 위키를 추가로 제작하여 다채로운 작업을 진행합니다. 여러 구성원이
                            상호 간 협의를 거쳐 데이터 구조화의 형태를 결정하고, 메타 데이터의 내용을 작성할 것입니다. 메타 데이터
                            제작은 본 프로젝트의 핵심적인 과정으로, 메타 데이터의 내용은 학술 가치를 지님과 동시에 디지털
                            인문학 내의 중요한 쟁점들을 다루게 되는 요소가 될 것입니다.
                        </TextStyle>
                    </TextBlock>
                    <TextBlock>
                        <TextStyle>
                            현재 디지털 인문학에서 또 하나의 중요한 쟁점은 바로 개방과 협업입니다. 과거 소수 전문가만 접근할 수 있던 
                            고전적 원문 자료들을 현재 각종 한국학 관련 웹 사이트에 공개하였기에 여러 사람이 손쉽게 웹 환경에서 다양한
                            고전 자료에 접근할 수 있었고 이는 고전 대중화에도 크게 기여했습니다. 이제는 고전 대중화를 넘어 모두가
                            고전 빅 데이터에 접근할 수 있는 환경을 만드는 것이 성균 코퍼스의 최종적인 목표입니다.
                        </TextStyle>
                        <HatImg/>
                    </TextBlock>
                

            </TextWholeBlock>
        </IntroBlock>
    );
}

export default CopusDestination;