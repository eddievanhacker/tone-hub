import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext'
import { useState, useContext } from 'react'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {

    const [setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price
        }

        addItem(item, quantity)
    }

    return (
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className='ItemImg' />
            </picture>
            <section>
                <p className='Info'>
                    Categoría: {category}
                </p>
                <p className='Info'>
                    Descripción: {description}
                </p>
                <p className='Info'>
                    Precio: ${price}
                </p>
            </section>
            <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ',quantity)} />
        </article>
    )
}

export default ItemDetail