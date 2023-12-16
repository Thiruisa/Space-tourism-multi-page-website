import React  from 'react';
import {NavLink} from "react-router-dom"
import logo from "../starter-code/assets/shared/logo.svg"

export default function Header() {
    return (
        <>
            <header>
                <div>
                    <NavLink to="/">
                        <img src={logo} alt="" title=""/>
                    </NavLink>
                </div>
            </header>
        </>
    )
}