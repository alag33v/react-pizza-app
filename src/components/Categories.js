import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../redux/ducks/filtersDucks';

const Categories = () => {
  const { categoryNames, categoryActive } = useSelector(
    ({ filters }) => filters
  );
  const dispatch = useDispatch();

  const onSelectCategory = index => {
    dispatch(setCategory(index));
  };

  return (
    <div className='categories'>
      <ul>
        <li
          className={categoryActive === null ? 'active' : ''}
          onClick={() => onSelectCategory(null)}
        >
          Все
        </li>
        {categoryNames &&
          categoryNames.map((name, index) => (
            <li
              className={categoryActive === index ? 'active' : ''}
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

export default Categories;
