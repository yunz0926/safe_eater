import React from 'react';
import styled from 'styled-components';
import TopBar from '../components/common/TopBar';
import Navigation from '../components/common/Navigation';
import Footer from '../components/common/Footer';

const ContactInfo = styled.div`
    width: 800px;
    padding: 50px 30px;
    margin: 150px 0px 400px 250px;
    background-color: rgba(196, 196, 196, 0.1);
    font-family: 'Raleway';
    font-size: 18px;
`;

const Contact = () => {
    return (
        <div>
            <TopBar/>
            <Navigation/>
            <ContactInfo>
                <div style={{fontWeight: 'bold', display: 'inline', color: '#49735D', fontSize: '22px'}}> safe eater </div>
                에 대한 기타 의견 및 건의 내용이 있을 경우 <a href="mailto: chldbswl9@gmail.com? subject: subject text" style={{textDecoration: 'none'}}>chldbswl9@gmail.com </a>으로 연락주시기 바랍니다.
            </ContactInfo>
            <Footer/>
        </div>
    );
};

export default Contact;