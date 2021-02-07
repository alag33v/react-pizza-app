import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Categories, SortPopup, PizzaBlock, Loader } from '../components';
import { fetchPizzas } from '../redux/ducks/pizzasDucks';

const Home = () => {
  const pizzas = useSelector(({ pizzas }) => pizzas.pizzas);
  // const { categoryActive, sortActive } = useSelector(({ filters }) => filters); // filters
  const isLoading = useSelector(state => state.pizzas.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPizzas());
  }, [dispatch]);

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories />
        <SortPopup />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {isLoading
          ? Array(10)
              .fill('')
              .map((_, index) => <Loader key={index} />)
          : pizzas.map(pizza => <PizzaBlock {...pizza} key={pizza.id} />)}
      </div>
    </div>
  );
};

export default Home;
