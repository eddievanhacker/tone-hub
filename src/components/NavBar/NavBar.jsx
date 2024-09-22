import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget.jsx'

const NavBar = () => {
    return (
        <div className='NavBar-app'>
            <h2>
                <CartWidget />
            </h2>
        </div>
    )
}

export default NavBar;