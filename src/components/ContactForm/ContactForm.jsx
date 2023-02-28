import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'Redux/contacts/contacts-slice';
import { getContactList } from 'Redux/contacts/contacts-selectors';

import css from './ContactForm.module.css';

const ContactForm = () => {
  const contacts = useSelector(getContactList);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    if (
      contacts.filter(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      ).length
    ) {
      return alert(`${name} is already in contacts`);
    }
    dispatch(addContact({ name, number }));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label htmlFor="name" className={css.label}>
        Name
        <input
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
          className={css.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.btnSubmit} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
