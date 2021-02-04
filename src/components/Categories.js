import { useState } from 'react';

const Categories = ({ categoryNames }) => {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <div className='categories'>
      <ul>
        <li
          className={activeItem === null ? 'active' : ''}
          onClick={() => setActiveItem(null)}
        >
          Все
        </li>
        {categoryNames &&
          categoryNames.map((name, index) => (
            <li
              className={activeItem === index ? 'active' : ''}
              onClick={() => setActiveItem(index)}
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
