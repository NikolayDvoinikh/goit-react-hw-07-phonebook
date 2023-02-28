import css from './ContactList.module.css';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { deleteContact } from 'Redux/contacts/contacts-slice';

import { getContactList } from 'Redux/contacts/contacts-selectors';
import { getFilter } from 'Redux/filter/filter-selectors';

const ContactList = () => {
  const contacts = useSelector(getContactList);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const filterByName = () => {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const filteredList = filterByName();

  return (
    <ul className={css.listContacts}>
      {filteredList.map(({ id, name, number }) => (
        <li key={id} className={css.item}>
          <span className={css.text}>
            {name}: {number}
          </span>
          <button
            id={id}
            className={css.btnDelete}
            type="button"
            onClick={() => dispatch(deleteContact(id))}
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
