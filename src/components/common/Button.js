import React from 'react';
import styled from 'styled-components';
import { searchData } from '../../modules/data';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const ButtonBlock = styled.button`
    width: 70px;
    height: 45px;
    color: white;
    background-color: #49735D;
    /*background-color: #c7cfb7;*/
    border: none;
    border-radius: 15px;
    font-size: 15px;
    font-family: '고양일산';
`

const Button = () => {
    const dispatch = useDispatch();
    const {si, sido, category} = useSelector(({admin_district, category}) => ({
            si: admin_district.si,
            sido: admin_district.sido,
            category: category.category,
        }));
    const onClick = () => {
        axios.get("./safe_restaurant.json")
             .then(({data}) => {
                 if(category !== "전체") {
                     const searchedData = data.data.filter(e => 
                        (e["RELAX_SI_NM"] === si &&
                        e["RELAX_SIDO_NM"] === sido &&
                        e["RELAX_GUBUN_DETAIL"] === category));
                    console.log(searchedData);
                     dispatch(searchData(searchedData));
                 }
                 else {
                     const searchedData = data.data.filter(e => 
                        (e["RELAX_SI_NM"] === si && 
                        e["RELAX_SIDO_NM"] === sido ));
                     console.log(searchedData);
                     dispatch (searchData(searchedData));
                 }
             })
             .catch(e => {
                 console.log(e);
             });
    }

    return <ButtonBlock onClick={() => {onClick();}}>검색</ButtonBlock>;
};

export default Button;