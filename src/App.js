import { Switch, Route } from 'react-router-dom';
import { Header } from './components';
import { Home, Cart, NotFound } from './pages';

export const App = () => (
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
