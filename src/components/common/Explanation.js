import React from 'react';
import styled from 'styled-components';

const TitleBlock = styled.div`
    width: 500px;
    margin-left: 250px;
    margin-top: 50px;
    color: #49735D;
    font-family: 'NanumBarunGothic';
    font-size: 38px;
    font-weight: bold;
`;

const ContentBlock = styled.div`
    width: 800px;
    height: 280px;
    padding: 30px;
    margin: 30px 0px 250px 200px;
    font-family: 'NanumBarunGothic';
    font-size: 18px;
    line-height: 2;
    background-color: rgba(196, 196, 196, 0.1);
`;

const Explanation = () => {
    return (
        <div>
            <TitleBlock>
                코로나 안심식당이란?
            </TitleBlock>
            <ContentBlock>
                '코로나 안심식당'은 코로나19를 계기로 감염병 확산에 취약한 식사문화를 바꿔나가기 위한
                농림축산식품부의  「식사문화 개선 추진방안」을 바탕으로, 각 지자체에서 
                <div style={{fontWeight: 'bold', display: 'inline'}}> 덜어먹기 가능한 도구 비치・제공, 위생적 수저관리 및 종사자 마스크 착용</div> 
                과 지자체별 추가 요건 이행을 확인하여 지정한 외식업체입니다. <br/><br/>
                농식품부는 지자체의 안심식당 정보를 매주 데이터로 변환하여 공공 데이터 포털(www.data.go.kr)을 통해 OpenAPI로 개방하고있습니다.
                <div style={{fontWeight: 'bold', display: 'inline', color: '#49735D', fontSize: '22px'}}> safe eater </div>은 이 공공데이터를 바탕으로
                코로나 안심식당을 지역별, 카테고리별로 검색할 수 있는 기능과 위치 권한을 통해 주변에서 검색할 수 있는 기능을 제공합니다.
            </ContentBlock>
        </div>
    );
};

export default Explanation;