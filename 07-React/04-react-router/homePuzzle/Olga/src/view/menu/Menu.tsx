import { Link, Outlet } from 'react-router-dom'

const categories = ["Appetizers", "Main Course", "Desserts", "Drinks"];

function Menu() {
    return (
        <div className='menu'>

            <div className='menu-categories'>
                <h2>MENU CATEGORIES</h2>
                <ul>
                    {categories.map((category) => (
                        <li key={category}>
                            <Link to={`${category.toLowerCase()}`}>{category}</Link>
                        </li>
                    ))}
                </ul>
                <Link to="/" className='btn link-home'>Go to Home</Link>
            </div>

            <Outlet />

        </div>
    );
}

export default Menu