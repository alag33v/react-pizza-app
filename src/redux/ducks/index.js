import { combineReducers } from 'redux';
import filtersReducer from './filtersDucks';
import pizzasReducer from './pizzasDucks';
import cartReducer from './cartDucks';

const rootReducer = combineReducers({
  filters: filtersReducer,
  pizzas: pizzasReducer,
  cart: cartReducer
});

export default rootReducer;
