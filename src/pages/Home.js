import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Categories, SortPopup, PizzaBlock } from '../components';

const Home = () => {
  const pizzas = useSelector(({ pizzas }) => pizzas.pizzas);

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories />
        <SortPopup
          sortTitles={[
            { name: 'популярности', type: 'popularity' },
            { name: 'цене', type: 'price' },
            { name: 'алфавиту', type: 'alphabet' }
          ]}
        />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {pizzas &&
          pizzas.map(pizza => <PizzaBlock {...pizza} key={pizza.id} />)}
      </div>
    </div>
  );
};

SortPopup.propTypes = {
  sortTitles: PropTypes.array.isRequired
};

export default Home;
