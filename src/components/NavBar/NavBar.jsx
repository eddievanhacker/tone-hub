import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='NavBar-app'>
            <Link to='/'>
            <h3>TONEHUB</h3>
            </Link>
            <div className='Categories'>
                <NavLink to={'/category/hofner'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Hofner</NavLink>
                <NavLink to={'/category/gretsch'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Gretsch</NavLink>
                <NavLink to={'/category/rickenbacker'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Rickenbacker</NavLink>
                <NavLink to={'/category/hammond'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Hammond</NavLink>
            </div>
            <div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar;