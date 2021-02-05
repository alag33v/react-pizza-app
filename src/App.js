import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header } from './components';
import { Home, Cart, NotFound } from './pages';

export const App = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const fetchPizzasData = async () => {
      try {
        const response = await fetch(
          'https://my-api-test-2021.herokuapp.com/pizzas'
        );
        const pizzasData = await response.json();
        setPizzas(pizzasData);
      } catch (err) {
        console.log('error', err);
      }
    };
    fetchPizzasData();
  }, []);
  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <Switch>
          <Route exact path='/' render={() => <Home pizzas={pizzas} />} />
          <Route exact path='/cart' component={Cart} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  );
};
