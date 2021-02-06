import { combineReducers } from 'redux';
import filtersReducer from './filtersDucks';
import pizzasReducer from './pizzasDucks';

const rootReducer = combineReducers({
  filters: filtersReducer,
  pizzas: pizzasReducer
});

export default rootReducer;
