import { NavLink, Outlet } from "react-router-dom";
import './styles/Root.css';

export default function Root(props) {
    const { children } = props;

    return (
        <>
            <div className="header-container">
                <h1 className="site-title"><NavLink className='nav-link' to='/'>Capitol City Athletic Club</NavLink></h1>
                <nav className="navbar">
                    <h3 className="nav-item"><NavLink to='/sports' className='nav-link-item'>Sports</NavLink></h3>
                    <h3 className="nav-item"><NavLink to='contact' className='nav-link-item'>Contact</NavLink></h3>
                    <h3 className="nav-item"><NavLink to='/about' className='nav-link-item'>About</NavLink></h3>
                </nav>
            </div>

            <main>{children || <Outlet />}</main>
        </>
    )
}