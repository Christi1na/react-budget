import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    gap: 10px;
    justify-content: space-between;

    margin: 0 5px;
    &:not(:last-child) {
        margin-bottom: 20px;
    }
    padding: 10px;
    border: 1px solid gray;
    background-color: ${({value}) => value < 0 ? '#dbdbdb' : 'transparent'};
    p {
        margin: 0;
    }
    /* div {
        margin-right: 55px;
    } */

`