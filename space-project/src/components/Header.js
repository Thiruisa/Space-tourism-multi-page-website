import React  from 'react';
import {NavLink} from "react-router-dom"
import logo from "../starter-code/assets/shared/logo.svg"

export default function Header() {
    return (
        <>
          <header>
            <div>
              <NavLink to="/">
                <img src={logo} alt="space" title="Travel to Space" />
              </NavLink>
            </div>
    
            <nav>
              <ul>
                <li>
                  <NavLink
                    to="/"
                    exact>
                    <span>00</span> Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/destination"
                    exact>
                    <span>01</span> Destination
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/crew"
                    exact>
                    <span>02</span> Crew
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/technology"
                    exact>
                    <span>03</span> Technology
                  </NavLink>
                </li>
              </ul>
            </nav>
            {/* )} */}
    
            {/* <div className="menu">
              <button id="menu" onClick={handleClick}>
                <FiMenu className="text-white text-4xl" />
              </button>
            </div> */}
          </header>
        </>
      )
}