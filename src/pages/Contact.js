import React from 'react';
import styled, { keyframes } from 'styled-components';
import TopBar from '../components/common/TopBar';
import Footer from '../components/common/Footer';

const typing = keyframes`
    from {
        width: 0;
    }
    to {
        width: 100%;
    }
`;

const blinkCaret = keyframes`
    from, to {
        border-color: transparent;
    }
    50% {
        border-color: black;
    }
`;

const ContactInfo = styled.div`
    width: 800px;
    padding: 50px 30px;
    margin: 250px 0px 400px 250px;
    background-color: rgba(196, 196, 196, 0.1);
    font-family: 'Raleway';
    font-size: 18px;
`;

const TextBlock = styled.div`
    border-right: 2px solid black;
    overflow: hidden;
    margin: 0 auto;
    white-space: nowrap;    

    animation: 
    ${typing} 3.5s steps(40, end),
    ${blinkCaret} .75s step-end infinite;
`;

const Contact = () => {
    return (
        <div>
            <TopBar/>
            <ContactInfo>
                <TextBlock>
                <div style={{fontWeight: 'bold', display: 'inline', color: '#49735D', fontSize: '22px'}}> safe eater </div>
                에 대한 기타 의견 및 건의 내용이 있을 경우 <a href="mailto: chldbswl9@gmail.com? subject: subject text" style={{textDecoration: 'none'}}>chldbswl9@gmail.com </a>으로 연락주시기 바랍니다.
                </TextBlock>
            </ContactInfo>
            <Footer/>
        </div>
    );
};

export default Contact;