import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { setCategory } from '../redux/ducks/filtersDucks';

const Categories = () => {
  const { activeItem, categoryNames } = useSelector(({ filters }) => ({
    activeItem: filters.category,
    categoryNames: filters.categoryNames
  }));
  const dispatch = useDispatch();

  const onSelectCategory = index => {
    dispatch(setCategory(index));
  };

  return (
    <div className='categories'>
      <ul>
        <li
          className={activeItem === null ? 'active' : ''}
          onClick={() => onSelectCategory(null)}
        >
          Все
        </li>
        {categoryNames &&
          categoryNames.map((name, index) => (
            <li
              className={activeItem === index ? 'active' : ''}
              onClick={() => onSelectCategory(index)}
              key={`${name}-${index}`}
            >
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
};

Categories.propTypes = {
  categoryNames: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Categories;
