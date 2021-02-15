import React from 'react';
import styled from 'styled-components';

const PageBlock = styled.ul`
    margin-top: 50px;
    margin-bottom: 100px;
    list-style: none;
    text-align:center;
    border-radius:3px;
    color: #41444b;
    padding:1px;
`;

const PageLi = styled.li`
    display: inline-block;
    font-size:25px;
    padding: 15px;
    border-radius: 25px;
    width:25px;
    &:hover{
        cursor:pointer;
        color:white;
        background-color: #c7cfb7;
    }
    &:focus::after{
        color:white;
        background-color:#263A6C;
    }
`;

const PageSpan = styled.span`
    float: center;
    &:hover::after,
    &:focus::after{
        border-radius:100%;
        color:white;
        background-color:#263A6C;
    }
`;

const Pagination = ({itemsPerPage, totalItems, paginate}) => {
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalItems/itemsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <PageBlock>
            {pageNumbers.map(number => (
                <PageLi key={number}>
                    <PageSpan onClick={() => {paginate(number);
                                              window.scrollTo(0, 0);}}>
                        {number}
                    </PageSpan>
                </PageLi> 
            ))}
        </PageBlock>
    );
};

export default Pagination;