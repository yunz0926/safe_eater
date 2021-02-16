import React, {useState} from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
    width: 230px;
    height: 45px;
    margin-right: 5px;
    border: 3px solid #49735D;
    border-radius: 20px;
    text-align: center;
    font-size: 15px;
    color: #686d76;
    font-family: 'Raleway';
    text-align-last: center;

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
            <option key="undefined" value="default" disable="true" hidden>==={name}===</option>
            {list && list.map((t, index) => (
                <option key={index}>{t}</option> 
            ))}
        </StyledSelect>
    );
};

export default Select;