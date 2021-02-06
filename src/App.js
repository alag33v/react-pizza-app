import { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Header } from './components';
import { Home, Cart, NotFound } from './pages';
import { setPizzas } from './redux/ducks/pizzasDucks';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPizzasData = async () => {
      try {
        const response = await fetch(
          'https://my-api-test-2021.herokuapp.com/pizzas'
        );
        const pizzasData = await response.json();
        dispatch(setPizzas(pizzasData));
      } catch (err) {
        console.log('error', err);
      }
    };
    fetchPizzasData();
  }, [dispatch]);

  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <Switch>
          <Route exact path='/react-pizza-app' component={Home} />
          <Route exact path='/cart' component={Cart} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  );
};
