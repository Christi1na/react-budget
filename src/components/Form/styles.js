import styled from "styled-components";

export const Wrapper = styled.div`
    border: 1px solid gray;
    padding: 5px;
    margin-bottom: 10px;
    background-color: #fff;
    border-radius: 3px;
`
Wrapper.displayName = "TransactionWrapper"

export const Row = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    &:not(:last-child) {
        margin-bottom: 10px;
    }
`

Row.displayName = "TransactionRow"

export const FormElement = styled.form`
    max-width: 300px;
`

FormElement.displayName = "TransactionForm"

export const Button = styled.button`
    flex-grow: 1;
    align-self: stretch;
    border-radius: 3px;
    border: 1px solid gray;
    &:hover {
        cursor: pointer;
    }
`   
Button.displayName = "TransactionButton"

export const Input = styled.input`
    min-width: 80px;
    border-radius: 3px;
    border: 2px solid #dbdbdb;
    padding: 0 5px;
    /* border-radius: 3px; */
    outline: none;
    flex-grow: 1;
    height: 40px;
    /* flex-grow: ${props => props.type === "number" ? "1" : null}; */
`
Input.displayName = "TransactionInput"

export const Comment = styled.textarea`
    border-color: red;
`

Comment.displayName = "TransactionComment"