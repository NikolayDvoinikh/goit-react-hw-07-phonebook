export const getContactList = ({ contacts }) => contacts.contacts;

export const filterByName = ({ contacts, filter }) => {
  return contacts.contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });
};

export const selectLoader = ({ contacts }) => contacts.isLoading;
export const selectError = ({ contacts }) => contacts.error;
