import React from "react";
import styled from "styled-components";
export const CompStyle = styled.div`
    font-family: Calibri, sans-serif;
    font-size: 20px;
    color: #222222;
    width: 100%;
    height: 95wh;
	display: flex;
	flex-direction: column;
`
const LeftHandCompStyle = styled(CompStyle)`
    background: green;
    text-align: right;
`;
const RightHandCompStyle = styled(CompStyle)`
    background: red;
`;
export const LeftHandComponent = ({ name }) => <LeftHandCompStyle>{name}</LeftHandCompStyle>;
export const RightHandComponent = ({ message }) => <RightHandCompStyle>{message}</RightHandCompStyle>;