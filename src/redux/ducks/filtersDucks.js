// Actions
const SET_SORT_BY = 'SET_SORT_BY';
const SET_CATEGORY = 'SET_CATEGORY';
const SET_SORT = 'SET_SORT';

// Reducer
const initialState = {
  sortBy: 'popularity',
  categoryNames: ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'],
  categoryActive: null,
  sortTitles: [
    { name: 'популярности', type: 'popularity' },
    { name: 'цене', type: 'price' }
  ],
  sortActive: 0
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SORT_BY:
      return { ...state, sortBy: action.payload };
    case SET_CATEGORY:
      return { ...state, categoryActive: action.payload };
    case SET_SORT:
      return { ...state, sortActive: action.payload };
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

export const setSort = index => ({
  type: SET_SORT,
  payload: index
});

export default filtersReducer;
