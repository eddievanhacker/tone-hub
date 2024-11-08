import './CartWidget.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return (
        <Link to='/cart' className='CartWidget' style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
            <img src="https://www.svgrepo.com/show/94662/shopping-cart.svg" alt="Cart" height={10} />
            { totalQuantity }
        </Link>
    )
}

export default CartWidget;