// Actions
const SET_SORT_BY = 'SET_SORT_BY';
const SET_CATEGORY = 'SET_CATEGORY';

// Reducer
const initialState = {
  sortBy: 'popularity',
  category: null,
  categoryNames: ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SORT_BY:
      return { ...state, sortBy: action.payload };
    case SET_CATEGORY:
      return { ...state, category: action.payload };
    default:
      return state;
  }
};

// Action Creators
export const setSortBy = sort => ({
  type: SET_SORT_BY,
  payload: sort
});

export const setCategory = index => ({
  type: SET_CATEGORY,
  payload: index
});

export default filtersReducer;
