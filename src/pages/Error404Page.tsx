import React from "react"
import { useRouteError, Link } from "react-router-dom";

export default function Error404() {
    const error = useRouteError();

    return (
        <>
            <h1 className="color-red">Error404 "{location.pathname}" not found <Link to={"/"}>Main Page</Link></h1> 
        </>
    )
}