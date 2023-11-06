import { NavLink, Outlet } from 'react-router-dom'
import logo from '../assets/techoverlogo.png'

export default function RootLayout() {
    return (
        <div className="root-layout">
            <header>
                <nav className="navbar">
                    <img src={logo} alt="Techover logo" className="logo" />
                    <div className="nav-links">
                        <NavLink className="nav-link" to="/">
                            Hem
                        </NavLink>
                        <NavLink className="nav-link" to="about">
                            Om oss
                        </NavLink>
                        <NavLink className="nav-link" to="help">
                            Hjälp
                        </NavLink>
                        <NavLink to="profiles" className="nav-link">
                            Profiles
                        </NavLink>
                    </div>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}
