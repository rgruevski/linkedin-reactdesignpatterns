import React from "react";
import styled from "styled-components";
import { CurrentUserLoader } from "./container-components/CurrentUserLoader";
import { UserInfo } from "./server-components/UserInfo";
import { ProductInfo } from "./server-components/ProductInfo";
const AppContainer = styled.div` 
	font-family: Calibri, sans-serif;
    background-color: #008080;
	font-size: 20px;
	color: #222222;
	width: 100%;
	height: 95vh;
	display: flex;
	flex-direction: column; 
`;
function App() {
    return (
        <AppContainer>
            <CurrentUserLoader>
                <UserInfo />
            </CurrentUserLoader>
        </AppContainer>
    );
}
export default App;