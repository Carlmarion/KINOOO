import React from "react";
import { Link } from 'react-router-dom';
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
const Root = () => {
    return (
        <div>
            <nav>
                <Link to="/"><Header/></Link>
                <Link to="favorites">Favorites</Link>
            </nav>
            <Outlet/>
        </div>
    )
}

export default Root;