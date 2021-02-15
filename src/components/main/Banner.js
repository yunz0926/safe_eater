import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import foodtable from './foodtable.jpg';

const BannerBlock = styled(Link)`
    background-color: #6BA688;
    width: 1310px;
    height: 430px;
    margin-top: 20px;
    margin-left: 5px;
    display: flex;
    text-decoration: none;
`;

const ContentBlock = styled.div`
    font-family: 'NanumBarunGothic';
    color: white;
    font-size: 18px;
    margin-top: 100px;
    margin-left: 750px;
    line-height: 30px;
`;

const ImageBlock = styled.div`
    position: absolute;
    padding-left: 50px;
    padding-top: 50px;
    height: 430px;
`;

const Banner = () => {
    return (
        <BannerBlock to="/introduction">
            <ImageBlock>
                <img src={foodtable} alt="foodtable" width='650' height='430'/>
            </ImageBlock>
            <ContentBlock>
                <div style={{fontSize: 50, fontWeight: 'bold', marginBottom: '40px'}}> 
                    우리, 안전하게 볼까?
                </div>
                3가지 방역수칙을 준수하여 안심식당으로 선정된 식당 리스트를 찾아보세요. <br/>
                ① 덜어먹기 가능한 도구 비치·제공 <br/>
                ② 위생적인 수저 관리 <br/>
                ③ 종사자 마스크 착용 여부 <br/>
            </ContentBlock>
        </BannerBlock>
    );
};

export default Banner;