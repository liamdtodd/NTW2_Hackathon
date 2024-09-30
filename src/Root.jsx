import { NavLink, Outlet } from "react-router-dom";

export default function Root(props) {
    const { children } = props;

    return (
        <>
            <div>
                <h1><NavLink to='/'>Capital City Athletic Club</NavLink></h1>
                <nav>
                    <h3><NavLink to='/sports'>Sports</NavLink></h3>
                    <h3><NavLink to='contact'>Contact</NavLink></h3>
                    <h3><NavLink to='/about'>About</NavLink></h3>
                </nav>
            </div>

            <main>{children || <Outlet />}</main>

            <footer>

            </footer>
        </>
    )
}