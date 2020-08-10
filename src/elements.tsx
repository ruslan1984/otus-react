import styled from "@emotion/styled";

export const Input = styled.input`
    padding: 12px 20px;
    font-size: 16px;
    cursor: pointer;
    border: 1px solid grey;
    border-radius: 5px;
    text-transform: uppercase;
    font-weight: 900;
    &:hover {
        transition: 0.3s;
        background: #eeeeee;
    }
`;

export const Button = styled.button`
    padding: 12px 20px;
    font-size: 16px;
    cursor: pointer;
    background: #68ef68;
    border: none;
    border-radius: 5px;
    text-transform: uppercase;
    font-weight: 900;
    margin: 5px;
    &:hover {
        transition: 0.3s;
        background: #1ad41a;
    }
`;

export const CellBtn = styled.button`
    text-transform: uppercase;
    font-weight: 900;
    transition: 0.5s;
    cursor: pointer;
    &:hover {
        background: #aaa;
        border: none;
    }
`;
