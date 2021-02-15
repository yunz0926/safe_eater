import { createGlobalStyle } from 'styled-components';

import NanumBarunGothic from './NanumBarunGothic.ttf';
import 고양일산 from './고양일산.ttf'

export default createGlobalStyle`
    @font-face {
        font-family: 'NanumBarunGothic';
        src: local('NanumBarunGothic'), url(${NanumBarunGothic}) format('truetype');
    }
    @font-face {
        font-family: '고양일산';
        src: local('고양일산'), url(${고양일산}) format('truetype');
    }
    
`;