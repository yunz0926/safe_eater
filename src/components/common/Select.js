import React, {useState} from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
    width: 230px;
    height: 45px;
    margin-right: 5px;
    border: 3px solid #c7cfb7;
    border-radius: 20px;
    text-align: center;
    font-size: 15px;
    color: #686d76;
    font-family: '고양일산';
    text-align-last: center;
    /*background: url('arrow1.png') no-repeat 90% 50%;*/

    option {
        align-items: center;
    }
    &:hover{
        background-color: #f6f5f5;
    }
    &:focus{
        background-color: #f6f5f5;
    }
`;


const Select = ({list, name, Change}) => {
    const [value, setValue] = useState("");

    const onChange = e => {
        setValue(e.target.value);
        Change(e);
    }
    return (
        <StyledSelect name={name} value={value} onChange={onChange}>
            <option key="undefined" selected disable hidden>==={name}===</option>
            {list && list.map((t, index) => (
                <option key={index}>{t}</option> 
            ))}
        </StyledSelect>
    );
};

export default Select;