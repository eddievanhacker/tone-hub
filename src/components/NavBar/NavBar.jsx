import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget.jsx'

const NavBar = () => {
    return (
        <div className='NavBar-app'>
            <div></div>
            <div>
            <button className='Button'>Hofner</button>
            <button className='Button'>Gretsch</button>
            <button className='Button'>Rickenbacker</button>
            <button className='Button'>Hammond</button>
            </div>
            <img src="https://www.svgrepo.com/show/94662/shopping-cart.svg" alt="Cart" />
        </div>
    )
}

export default NavBar;