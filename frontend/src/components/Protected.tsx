import React, { PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import { Navigate } from "react-router-dom";



export const Protected = ({children}:PropsWithChildren)=>{
   
    const isLogin  = useSelector((state : RootState )=> state.authReducer.isLogin)
    return (
        <div>
        { isLogin ? (
            children           
            ):
            (
                <Navigate to={"/"}/>
            )
        }
        </div>

    )
}