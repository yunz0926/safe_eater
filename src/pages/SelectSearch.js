import React from 'react';
import SelectContainer from '../containers/common/SelectContainer';
import TopBar from '../components/common/TopBar';
import styled from 'styled-components';

const MenuBlock = styled.div`
    display: inline-block;
    color: #393e46;
    font-size: 20px;
    font-family: 'NanumBarunGothic';
    padding-bottom: 3px;
    border-bottom: 5px solid #6BA688;
    margin: 70px 0 60px 200px;
`;

const SelectBlock = styled.div`
    width: 100%;
    height: 70px;
    margin-left: 300px;
    margin-top: 50px;
`;

const Search = () => {
    return (
        <div>
            <TopBar />
            <MenuBlock>
              지역별, 카테고리별로 검색하기
            </MenuBlock>
            <SelectBlock>
                <SelectContainer/>
            </SelectBlock>
        </div>
    );
};

export default Search;