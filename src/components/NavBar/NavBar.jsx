import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget.jsx'

const NavBar = () => {
    return (
        <div className='NavBar-app'>
            <h2>
                <CartWidget />
            </h2>

            {/* <button>Home</button>
            <button>Ítems</button> */}
        </div>
    )
}

export default NavBar;