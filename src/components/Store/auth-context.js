import React, { useState } from "react"

const AuthContext=React.createContext({
    token:'',
    isLoggedIn:false,
    login:(token)=>{},
    logout:()=>{}
})

export const AuthContextProvider=(props)=>{

    const initailtoken=localStorage.getItem('token')

    const[token,setToken]=useState(initailtoken)

    const userIsLoggedIn=!!token

    const loginHandler=(token)=>{
        setToken(token)
        localStorage.setItem('token',token)
    }

    const LogoutHandler=()=>{
        setToken(null)
        localStorage.removeItem('token')
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