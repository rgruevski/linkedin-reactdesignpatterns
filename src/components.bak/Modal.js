import React, { useState } from "react";
import styled from "styled-components";
const ModalBackground = styled.div`
    flex-wrap: nowrap;
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.5);
`;
const ModalBody = styled.div`
    display: block;
    background-color: white;
    border-radius: 15px;
    padding: 10px;
`;
const Button = styled.button`
    display: block;
    cursor: pointer;
    border-radius: 50px;
`;
const TurquoiseButton = styled(Button)`
    display: block;
    padding: 5px;
    margin: 25rem;
    background-color: turquoise;
    font-size: 50px;
    outline: 5px black solid;
    box-shadow: black 15px 15px 10px;
`;
const PinkButton = styled(Button)`
    display: block;
    background-color: pink;
    z-index: 2;
    outline: 2px black solid;
    box-shadow: black 2px 2px 2px;
`;
export const Modal = ({ children }) => {
    const [shouldShow, setShouldShow] = useState(false);
    return (
        <>
            <TurquoiseButton onClick={() => setShouldShow(true)}>Show Modal</TurquoiseButton>
            {
                shouldShow && (
                    <ModalBackground onClick={() => setShouldShow(false)}>
                        <ModalBody onClick={(e) => e.stopPropagation()}>
                            {children}
                            <PinkButton onClick={() => setShouldShow(false)}>Hide Modal</PinkButton>
                        </ModalBody>
                    </ModalBackground>
                )
            }
        </>
    );
}
