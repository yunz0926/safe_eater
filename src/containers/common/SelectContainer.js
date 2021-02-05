import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Select from '../../components/common/Select';
import styled from 'styled-components';
import { changeSI, changeSIDO } from '../../modules/admin_district';
import { changeCategory } from '../../modules/category';
import Button from '../../components/common/Button';

const SelectBlock = styled.div`
    width: 100%;
    height: 500px;
`;

const FormBlock = styled.form`
    margin-left: 300px;
    margin-top: 100px;
`


const SelectContainer = () => {
    const [districts, setDistricts] = useState([]);
    const [SiDoList, setSiDoList ] = useState([]);
    const SiList = districts.map(t => t.SI_NM);
    const CategoryList = ["전체", "한식", "중식", "일식", "서양식", "기타외국식", "기타 음식점업"];
    const dispatch = useDispatch();

    const onChangeSI = e => {
        dispatch(changeSI(e.target.value));
        const temp = districts.find(x => x.SI_NM === e.target.value);
        setSiDoList(temp.SIDO_NM);
    };

    const onChangeCategory = e => {
        dispatch(changeCategory(e.target.value));
    };

    const onChangeSIDO = e => {
        dispatch(changeSIDO(e.target.value));
    };

    useEffect(() => {
        axios
        .get("./korea_administrative_district.json")
        .then(({data}) => {
            setDistricts(data.data);

        })
        .catch(e => {
            console.log(e);
        });
    }, []);

    return (
        <SelectBlock>
            <FormBlock>
                <Select list={SiList} name="시도명" Change={onChangeSI}/>
                <Select list={SiDoList} name="시군구명" Change={onChangeSIDO}/>
                <Select list={CategoryList} name="카테고리" Change={onChangeCategory}/>
                <Link to="/search"><Button/></Link>
            </FormBlock>
        </SelectBlock>
    );
};

export default SelectContainer;