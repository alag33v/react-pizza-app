import { Switch, Route } from 'react-router-dom';
import { Header } from './components';
import { Home, Cart, NotFound } from './pages';

export const App = () => (
  <div className='wrapper'>
    <Header />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/cart' component={Cart} />
      <Route component={NotFound} />
    </Switch>
    <div className='content'></div>
  </div>
);
