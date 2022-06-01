import React from "react";
import styled from "styled-components";
import { SplitScreen } from "./components/SplitScreen";
const CompStyle = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 28px;
    color: #222222;
    width: 100%;
    height: 95wh;
`
const LeftHandCompStyle = styled(CompStyle)`
    background: green;
    text-align: right;
`;
const RightHandCompStyle = styled(CompStyle)`
    background: red;
`;
const LeftHandComponent = ({name}) => <LeftHandCompStyle>{name}</LeftHandCompStyle>
const RightHandComponent = ({message}) => <RightHandCompStyle>{message}</RightHandCompStyle>
function App() {

    return (
        <SplitScreen leftWeight={1} rightWeight={1}>
            <LeftHandComponent name="Rob:"/>
            <RightHandComponent message="Hello from the Right Hand Component!" />
        </SplitScreen>
    );
};
export default App;