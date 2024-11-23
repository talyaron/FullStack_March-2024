import { Link, Outlet } from 'react-router-dom'

const Menu = () => {
    return (
        <>
            <nav>
                <Link to="/home">
                    Home
                </Link>
                <Link to="/about">
                    About
                </Link>
                <Link to="/contact">
                    Contact Us
                </Link>
            </nav>
            <Outlet />
        </>
    )
}

export default Menu