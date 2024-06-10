import React, { PropsWithChildren, useEffect } from "react";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { verifyTokenThunk } from "../slices/authSlice";



export const Protected = ({children}:PropsWithChildren)=>{

    const dispatch = useDispatch<AppDispatch>()
   

    useEffect(() => {
        dispatch(verifyTokenThunk());
    }, [dispatch]);
   
    const isLogin  = useSelector((state : RootState )=> state.authReducer.isLoggedin)
    const loading = useSelector((state: RootState) => state.authReducer.loading);
    

    useEffect(()=>{
        console.log(" islogin " ,isLogin , " loading" ,loading)
    }, [isLogin])

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