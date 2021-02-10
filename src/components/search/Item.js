import React from 'react';
import styled from 'styled-components';
import Map from './Map';

const ContentBlock = styled.div`
    float: center;
    margin-left: 150px;
    width: 800px;
    padding: 3rem 6rem;
    border-bottom: 3px solid #c7cfb7;
`;

const MapBlock = styled.div`
    display: inline-block;
`;

const InfoBlock = styled.div`
    display: inline-block;
    width: 450px;
    vertical-align: top;
    padding-top: 5rem;
    margin-left: 50px;
    font-family: '고양일산';
    text-align: left;
`;

const NameBlock = styled.div`
    font-size: 21px;
    padding-bottom: 1rem;
`;
const SubInfoBlock = styled.div`
    font-size: 18px;
    line-height: 1.5rem;
    color: #686d76;
`;

const Item = ({name, category, addr, telephone}) => {
    return (
        <ContentBlock>
            <MapBlock>
                <Map searchPlace={name} address={addr} />
            </MapBlock>
            <InfoBlock>
                <NameBlock>
                    {name} / {category}
                    <br/>
                </NameBlock>
                <SubInfoBlock>
                    주소: {addr} <br/>
                    전화번호: {telephone}
                </SubInfoBlock>
            </InfoBlock>
        </ContentBlock>
    );
};

export default Item;