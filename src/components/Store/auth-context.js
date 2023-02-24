import React, { useState } from "react"

const AuthContext=React.createContext({
    token:'',
    isLoggedIn:false,
    login:(token)=>{},
    logout:()=>{}
})

export const AuthContextProvider=(props)=>{

    const[token,setToken]=useState(null)

    const userIsLoggedIn=!!token

    const loginHandler=(token)=>{
        setToken(token)
    }

    const LogoutHandler=()=>{
        setToken(null)
    }

    const contextvalue={
        token:token,
        isLoggedIn:userIsLoggedIn,
        login:loginHandler,
        logout:LogoutHandler
    }
    return (<AuthContext.Provider value={contextvalue}>{props.children}</AuthContext.Provider>)
}

export default AuthContext