import React from "react";


export const defaultUserState = {
    name: "",
    about: "",
    avatar: "",
}

export const CurrentUserContext = React.createContext(defaultUserState);
