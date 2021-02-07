// Actions
const SET_PIZZAS = 'SET_PIZZAS';
const SHOW_LOADER = 'SHOW_LOADER';
const HIDE_LOADER = 'HIDE_LOADER';

// Reducer
const initialState = {
  pizzas: [],
  isLoading: false
};

const pizzasReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PIZZAS:
      return { ...state, pizzas: action.payload };
    case SHOW_LOADER:
      return { ...state, isLoading: true };
    case HIDE_LOADER:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

// Action Creators
const setPizzas = pizza => ({
  type: SET_PIZZAS,
  payload: pizza
});

const showLoader = () => ({
  type: SHOW_LOADER
});

const hideLoader = () => ({
  type: HIDE_LOADER
});

// Thunk Creators
export const fetchPizzas = () => async dispatch => {
  dispatch(showLoader());
  try {
    const response = await fetch(
      'https://my-api-test-2021.herokuapp.com/pizzas'
    );
    const pizzasData = await response.json();
    dispatch(setPizzas(pizzasData));
  } catch (err) {
    console.log('error', err);
  } finally {
    dispatch(hideLoader());
  }
};

export default pizzasReducer;
