import React, { useState, useEffect } from "react"
import axios from "axios";
export const CurrentUserLoader = ({ children }) => {
    const [user, setUser] = useState({});
    useEffect(() => {
        (async () => {
            const response = await axios.request("/current-user");
            const user = response.data;
            setUser(user);
        })();
    }, []);
    return (
        <>
            {React.Children.map(children, child => {
                if (React.isValidElement(child)) {
                    React.cloneElement(child, { user });
                    console.log(child);
                }
                return child;
            })}
        </>
    );
};