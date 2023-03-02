import axios from 'axios';

const instancePhoneBook = axios.create({
  baseURL: 'https://63fbaaf31ff79e133292e0ae.mockapi.io/contacts',
});

export const apiGetAllContacts = async () => {
  const { data } = await instancePhoneBook.get('/');
  return data;
};

export const apiAddContact = async contact => {
  const result = await instancePhoneBook.post('/', contact);
  return result;
};

export const apiDeleteContact = async id => {
  const { data } = await instancePhoneBook.delete(`/${id}`);
  return data;
};
