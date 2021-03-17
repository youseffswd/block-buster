import { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { logo } from "../../imgs/imgs";
import { chooseVersion } from "../../store/actions/chooseVersion";
const NavBar = ({ navClass, chooseVersion }) => {
    const [active, setActive] = useState(false);
    const input = useRef(null);
    const handleClick = () => {
        setActive(false);
    };
    const changeHandler = e => {
        e.target.checked ? chooseVersion("light") : chooseVersion("dark");
    };
    useEffect(() => {
        if (!localStorage.getItem("version")) {
            chooseVersion("dark");
        } else {
            chooseVersion(localStorage.getItem("version"));
            input.current.checked = localStorage.getItem("version") === "light";
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <nav
            className={`${navClass} px-3 px-sm-4 px-md-5 py-2 py-sm-3 py-lg-4 d-flex align-items-center flex-wrap flex-lg-nowrap`}>
            <NavLink to="/block-buster/" className="logo">
                <img className="img-fluid" src={logo} alt="logo" />
            </NavLink>

            <div
                onClick={() => setActive(!active)}
                className="icon d-lg-none text-white flex-content-center flex-wrap">
                <div className="father">
                    <span className={active ? "active1" : ""}></span>
                    <span className={active ? "active2" : ""}></span>
                    <span className={active ? "active3" : ""}></span>
                </div>
            </div>
            <div className={`${active ? "active" : ""} links-container `}>
                <div className={`links`}>
                    <ul>
                        <li onClick={handleClick}>
                            <NavLink
                                exact
                                to="/block-buster/"
                                activeClassName="active">
                                Home
                            </NavLink>
                        </li>
                        <li onClick={handleClick}>
                            <NavLink
                                to="/block-buster/watch/movies"
                                activeClassName="active">
                                Movies
                            </NavLink>
                        </li>
                        <li onClick={handleClick}>
                            <NavLink
                                to="/block-buster/watch/tv"
                                activeClassName="active">
                                Tv
                            </NavLink>
                        </li>
                        <li onClick={handleClick}>
                            <NavLink
                                to="/block-buster/news"
                                activeClassName="active">
                                News
                            </NavLink>
                        </li>
                        <li onClick={handleClick}>
                            <NavLink
                                to="/block-buster/signup"
                                activeClassName="active">
                                Sign Up
                            </NavLink>
                        </li>
                        <li onClick={handleClick}>
                            <NavLink
                                to="block-buster/signin"
                                activeClassName="active">
                                Sign In
                            </NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <NavLink
                                className="profile bg-primary text-uppercase"
                                to="/block-buster/profile">
                                YS
                            </NavLink>
                        </li>
                        <li>
                            <div className="toggle-button-cover">
                                <div className="button-cover">
                                    <div className="button r" id="button-3">
                                        <input
                                            type="checkbox"
                                            onChange={changeHandler}
                                            ref={input}
                                            className="checkbox"
                                        />

                                        <div className="knobs"></div>
                                        <div className="layer"></div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default connect(null, { chooseVersion })(NavBar);
