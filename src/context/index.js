import React, { useState, createContext } from "react";

export const context = createContext();

export const ContextProvider = (props) => {
    const [userData, setUserData] = useState({});
    const [repos, setRepos] = useState([]);
    const [starred, setStarred] = useState([]);

    return (
        <context.Provider
            value={{
                userData,
                setUserData,
                repos,
                setRepos,
                starred,
                setStarred,
            }}>
            {props.children}
        </context.Provider>
    );
};
