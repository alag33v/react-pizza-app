import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Categories, SortPopup, PizzaBlock } from '../components';
import { fetchPizzas } from '../redux/ducks/pizzasDucks';

const Home = () => {
  const pizzas = useSelector(({ pizzas }) => pizzas.pizzas);
  const { categoryActive, sortActive } = useSelector(({ filters }) => ({
    categoryActive: filters.categoryActive,
    sortActive: filters.sortActive
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPizzas());
  }, [categoryActive, sortActive, dispatch]);

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories />
        <SortPopup />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {pizzas &&
          pizzas.map(pizza => <PizzaBlock {...pizza} key={pizza.id} />)}
      </div>
    </div>
  );
};

export default Home;
