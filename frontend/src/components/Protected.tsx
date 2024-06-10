import React, { PropsWithChildren, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {  verifyTokenThunk } from "../slices/authSlice";



export const Protected = ({children}:PropsWithChildren)=>{
    // const [loading, setLoading] = useState(true)
    const dispatch = useDispatch<AppDispatch>()
    const isLogin  = useSelector((state : RootState )=> state.authReducer.isLoggedin)
    const loading = useSelector((state: RootState) => state.authReducer.loading);
   

    useEffect(() => {
        dispatch(verifyTokenThunk()).then(()=>{
           
        })
    }, []);
   
    
    

  if (loading) {
    return <div>Loading...</div>;
  }
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