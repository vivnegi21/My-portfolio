import React, { useState } from "react";
import "./sidebar.css";
import Logo from "../../assets/icon.png";

function Sidebar(){
    const [toggle,showMenu] = useState(false);
    return(
        <>
            <aside className={toggle ? "aside show-menu" : "aside" }>
            <a href = "#home" className="nav__logo">
                <img src = {Logo} alt = "logo" / >
            </a>

            <nav className="nav">
                <div className="nav__menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#" className="nav__link">
                                <i className="icon-home"></i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className="icon-user-following"></i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                <i className="icon-briefcase"></i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#education" className="nav__link">
                                <i className="icon-graduation"></i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#experience" className="nav__link">
                                <i className="icon-note"></i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#projects" className="nav__link">
                                <i className="icon-layers"></i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#achievements" className="nav__link">
                                <i className="icon-badge "></i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <i className="icon-bubble"></i>
                            </a>
                        </li>
                        {/* <li className="nav__item">
                            <a href="#achievements" className="nav__link">
                                <i className="icon-graph"></i>
                            </a>
                        </li> */}
                    </ul>
                </div>
            </nav>

            {/* fotter */}
            <div>
                <span className="copyright">&copy; 2023 - 2024</span>
            </div>
            </aside>

            <div className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"} onClick={()=> showMenu(!toggle)}>
                <i className="icon-menu"></i>
            </div>
        </>
    )
}

export default Sidebar;