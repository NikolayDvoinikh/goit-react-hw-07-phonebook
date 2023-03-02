import css from './ContactList.module.css';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import {
  fetchAllContacts,
  fetchDeleteContact,
} from 'Redux/contacts/contacts-operations';
import { useEffect } from 'react';
import { getContactList } from 'Redux/contacts/contacts-selectors';
import { getFilter } from 'Redux/filter/filter-selectors';

const ContactList = () => {
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const handleDelete = id => {
    dispatch(fetchDeleteContact(id));
  };

  const contacts = useSelector(getContactList);
  console.log(contacts);
  const filterByName = () => {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const filteredList = filterByName();

  return (
    <ul className={css.listContacts}>
      {filteredList.map(({ id, name, phone }) => (
        <li key={id} className={css.item}>
          <span className={css.text}>
            {name}: {phone}
          </span>
          <button
            id={id}
            className={css.btnDelete}
            type="button"
            onClick={() => handleDelete(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
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
