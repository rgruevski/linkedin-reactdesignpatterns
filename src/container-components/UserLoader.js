import React, { useState, useEffect } from "react"
import axios from "axios";
export const UserLoader = ({ children }) => {
    const [user, setUser] = useState({});
    useEffect(() => {
        (async () => {
            const response = await axios.get();
            const user = response.data;
            setUser(user);
        })();
    }, []);
    return (
        <>
            {React.Children.map(children, child => {
                if (React.isValidElement(child)) {
                    React.cloneElement(child, { user });
                }
                return child;
            })}
        </>
    );
};