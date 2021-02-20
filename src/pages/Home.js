import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Categories, SortPopup, PizzaBlock, Loader } from '../components';
import { fetchPizzas } from '../redux/ducks/pizzasDucks';
import { addPizzaToCart } from '../redux/ducks/cartDucks';

const Home = () => {
  const { pizzas, isLoading } = useSelector(({ pizzas }) => pizzas);
  const { pizzas: cartPizzas } = useSelector(({ cart }) => cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPizzas());
  }, [dispatch]);

  const onClickAddPizza = obj => {
    dispatch(addPizzaToCart(obj));
  };

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories />
        <SortPopup />
      </div>
      <h2 className='content__title'>Пиццы</h2>
      <div className='content__items'>
        {isLoading
          ? Array(12)
              .fill('')
              .map((_, index) => <Loader key={index} />)
          : pizzas.map((pizza, index) => (
              <PizzaBlock
                {...pizza}
                cartCount={
                  cartPizzas[pizza.id] && cartPizzas[pizza.id].pizzas.length
                }
                onClickAddPizza={onClickAddPizza}
                key={`${pizza.id}-${index}`}
              />
            ))}
      </div>
    </div>
  );
};

export default Home;
