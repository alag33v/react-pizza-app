// Actions
const ADD_PIZZA_TO_CART = 'ADD_PIZZA_TO_CART';
const MINUS_CART_PIZZA = 'MINUS_CART_PIZZA';
const PLUS_CART_PIZZA = 'PLUS_CART_PIZZA';
const REMOVE_CART_PIZZA = 'REMOVE_CART_PIZZA';
const CLEAR_CART = 'CLEAR_CART';

// Reducer
const initialState = {
  pizzas: {},
  totalPrice: 0,
  itemsCount: 0
};

const getTotalPrice = arr => arr.reduce((acc, pizza) => acc + pizza.price, 0);
const _get = (obj, path) => {
  const [firstKey, ...keys] = path.split('.');
  return keys.reduce((acc, key) => {
    return acc[key];
  }, obj[firstKey]);
};
const totalPizzas = (obj, path) => {
  return Object.values(obj).reduce((acc, obj) => {
    const value = _get(obj, path);
    return acc + value;
  }, 0);
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PIZZA_TO_CART: {
      const currentPizzaItems = !state.pizzas[action.payload.id]
        ? [action.payload]
        : [...state.pizzas[action.payload.id].pizzas, action.payload];
      const newPizzas = {
        ...state.pizzas,
        [action.payload.id]: {
          pizzas: currentPizzaItems,
          totalPrice: getTotalPrice(currentPizzaItems)
        }
      };
      const totalPrice = totalPizzas(newPizzas, 'totalPrice');
      const itemsCount = totalPizzas(newPizzas, 'pizzas.length');
      return {
        ...state,
        pizzas: newPizzas,
        totalPrice,
        itemsCount
      };
    }
    case MINUS_CART_PIZZA: {
      const oldPizzas = state.pizzas[action.payload].pizzas;
      const newPizzas =
        oldPizzas.length > 1
          ? state.pizzas[action.payload].pizzas.slice(1)
          : oldPizzas;
      const newItems = {
        ...state.pizzas,
        [action.payload]: {
          pizzas: newPizzas,
          totalPrice: getTotalPrice(newPizzas)
        }
      };
      const totalPrice = totalPizzas(newItems, 'totalPrice');
      const itemsCount = totalPizzas(newItems, 'pizzas.length');
      return {
        ...state,
        pizzas: newItems,
        totalPrice,
        itemsCount
      };
    }
    case PLUS_CART_PIZZA: {
      const newPizzas = [
        ...state.pizzas[action.payload].pizzas,
        state.pizzas[action.payload].pizzas[0]
      ];
      const newItems = {
        ...state.pizzas,
        [action.payload]: {
          pizzas: newPizzas,
          totalPrice: getTotalPrice(newPizzas)
        }
      };
      const totalPrice = totalPizzas(newItems, 'totalPrice');
      const itemsCount = totalPizzas(newItems, 'pizzas.length');
      return {
        ...state,
        pizzas: newItems,
        totalPrice,
        itemsCount
      };
    }
    case REMOVE_CART_PIZZA:
      const newPizzas = { ...state.pizzas };
      const currentTotalPrice = newPizzas[action.payload].totalPrice;
      const currentItemsCount = newPizzas[action.payload].pizzas.length;
      delete newPizzas[action.payload];
      return {
        ...state,
        pizzas: newPizzas,
        totalPrice: state.totalPrice - currentTotalPrice,
        itemsCount: state.itemsCount - currentItemsCount
      };
    case CLEAR_CART:
      return { ...state, pizzas: {}, totalPrice: 0, itemsCount: 0 };
    default:
      return state;
  }
};

// Action Creators
export const addPizzaToCart = pizzaObj => ({
  type: ADD_PIZZA_TO_CART,
  payload: pizzaObj
});

export const minusCartPizza = pizzaId => ({
  type: MINUS_CART_PIZZA,
  payload: pizzaId
});

export const plusCartPizza = pizzaId => ({
  type: PLUS_CART_PIZZA,
  payload: pizzaId
});

export const removeCartPizza = pizzaId => ({
  type: REMOVE_CART_PIZZA,
  payload: pizzaId
});

export const clearCart = () => ({
  type: CLEAR_CART
});

export default cartReducer;
