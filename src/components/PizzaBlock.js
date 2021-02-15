import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const PizzaBlock = ({
  name,
  price,
  imageUrl,
  sizes,
  id,
  cartCount,
  onClickAddPizza
}) => {
  const [activeDough, setActiveDough] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const doughs = ['тонкое', 'традиционное'];

  const onAddPizza = () => {
    const pizzaObj = {
      name,
      price,
      imageUrl,
      dough: doughs[activeDough],
      size: sizes[activeSize],
      id
    };
    onClickAddPizza(pizzaObj);
  };

  return (
    <div className='pizza-block'>
      <img className='pizza-block__image' src={imageUrl} alt={name} />
      <h4 className='pizza-block__title'>{name}</h4>
      <div className='pizza-block__selector'>
        <ul>
          {doughs.map((dough, index) => (
            <li
              className={`${activeDough === index ? 'active' : ''}`}
              onClick={() => setActiveDough(index)}
              key={`${dough}-${index}`}
            >
              {dough}
            </li>
          ))}
        </ul>
        <ul>
          {sizes &&
            sizes.map((size, index) => (
              <li
                className={activeSize === index ? 'active' : ''}
                onClick={() => setActiveSize(index)}
                key={`${size}-${index}`}
              >
                {size} см
              </li>
            ))}
        </ul>
      </div>
      <div className='pizza-block__bottom'>
        <div className='pizza-block__price'>{price} ₽</div>
        <Button className='button--add' onClick={onAddPizza} outline>
          <svg
            width='12'
            height='12'
            viewBox='0 0 12 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
              fill='white'
            />
          </svg>
          <span>Добавить</span>
          {cartCount && <i>{cartCount}</i>}
        </Button>
      </div>
    </div>
  );
};

PizzaBlock.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
  id: PropTypes.number.isRequired,
  cartCount: PropTypes.number,
  onAddPizzaToCart: PropTypes.func
};

export default PizzaBlock;
