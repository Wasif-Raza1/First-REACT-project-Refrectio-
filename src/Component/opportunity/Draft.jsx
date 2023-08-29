import React from "react";
import Questionheader from "./questionheader";
import Questions from "./questions";
import { Outlet } from "react-router";

const Draft = () => {
    return (
        <>
        <Questionheader/>

        <Outlet/>
        </>
    )
}
export default Draft;

