import css from './filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'Redux/filter/filter-slice';
import { getFilter } from 'Redux/filter/filter-selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = ({ target }) => dispatch(setFilter(target.value));

  return (
    <label htmlFor="filter" className={css.label}>
      Find contacts by name
      <input
        value={filter}
        className={css.filter}
        type="text"
        name="filter"
        onChange={handleChange}
      />
    </label>
  );
};

export default Filter;
