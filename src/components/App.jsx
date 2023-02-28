import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';

import css from './app.module.css';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.title}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
