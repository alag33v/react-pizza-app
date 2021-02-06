// Actions
const SET_PIZZAS = 'SET_PIZZAS';

// Reducer
const initialState = {
  pizzas: [],
  isLoading: false
};

const pizzasReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PIZZAS:
      return { ...state, pizzas: action.payload };
    default:
      return state;
  }
};

// Action Creators
export const setPizzas = pizza => ({
  type: SET_PIZZAS,
  payload: pizza
});

export default pizzasReducer;
