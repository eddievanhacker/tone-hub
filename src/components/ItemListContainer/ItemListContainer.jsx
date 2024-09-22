import './ItemListContainer.css';

const ItemListContainer = ({ mensaje, parrafo }) => {
    return (
      <div className='ItemList'>
        <h2>{mensaje}</h2>
        <p>{parrafo}</p>
      </div>
    );
  };

export default ItemListContainer;