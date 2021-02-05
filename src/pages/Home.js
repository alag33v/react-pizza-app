import { Categories, SortPopup, PizzaBlock } from '../components';
import PropTypes from 'prop-types';

const Home = ({ pizzas }) => (
  <div className='container'>
    <div className='content__top'>
      <Categories
        categoryNames={[
          'Мясные',
          'Вегетарианская',
          'Гриль',
          'Острые',
          'Закрытые'
        ]}
      />
      <SortPopup sortTitles={['популярности', 'цене', 'алфавиту']} />
    </div>
    <h2 className='content__title'>Все пиццы</h2>
    <div className='content__items'>
      {pizzas && pizzas.map(pizza => <PizzaBlock {...pizza} key={pizza.id} />)}
    </div>
  </div>
);

SortPopup.propTypes = {
  sortTitles: PropTypes.array.isRequired
};

export default Home;
