import css from './ContactList.module.css';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import {
  fetchAllContacts,
  fetchDeleteContact,
} from 'Redux/contacts/contacts-operations';
import { useEffect } from 'react';
import { filterByName, selectLoader } from 'Redux/contacts/contacts-selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoader);

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const handleDelete = id => {
    dispatch(fetchDeleteContact(id));
  };

  const userList = useSelector(filterByName);

  const elements = userList.map(({ id, name, phone }) => (
    <li key={id} className={css.item}>
      <span className={css.text}>
        {name}: {phone}
      </span>
      <button
        id={id}
        disabled={loading}
        className={css.btnDelete}
        type="button"
        onClick={() => handleDelete(id)}
      >
        Delete
      </button>
    </li>
  ));
  return <>{<ul className={css.listContacts}>{elements}</ul>}</>;
};

export default ContactList;

ContactList.defaultProps = {
  filteredList: [],
};

ContactList.propTypes = {
  filteredList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
