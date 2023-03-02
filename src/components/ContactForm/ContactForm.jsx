import { useSelector, useDispatch } from 'react-redux';
import { fetchAddContact } from 'Redux/contacts/contacts-operations';
import {
  getContactList,
  selectLoader,
} from 'Redux/contacts/contacts-selectors';
import { useState } from 'react';
import { initState } from 'data/initState';

import css from './ContactForm.module.css';

const ContactForm = () => {
  const [state, setState] = useState({ ...initState });
  const { name, phone } = state;

  const contacts = useSelector(getContactList);
  const loading = useSelector(selectLoader);
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    const createdAt = new Date();
    if (
      contacts.filter(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      ).length
    ) {
      return alert(`${name} is already in contacts`);
    }
    dispatch(fetchAddContact({ ...state, createdAt }));
    console.log(fetchAddContact());
    setState({ ...initState });
  };

  const isActiveBtn = state.name && state.phone ? loading : true;

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label htmlFor="name" className={css.label}>
        Name
        <input
          onChange={handleChange}
          value={name}
          className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label htmlFor="number" className={css.label}>
        Number
        <input
          onChange={handleChange}
          value={phone}
          className={css.input}
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.btnSubmit} type="submit" disabled={isActiveBtn}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
