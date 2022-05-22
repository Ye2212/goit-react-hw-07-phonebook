// import { useSelector } from 'react-redux';
import Contact from 'components/Contact/Contact';
import { ContactListEl, ContactListItem } from './ContactList.styled';
import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from 'redux/contactsApi';
// import { getFilter } from 'redux/contactsSelectors';

function ContactList() {
  const { data: contacts } = useFetchContactsQuery();
  // const { filter } = useSelector(state => getFilter(state));
  const [deleteContact] = useDeleteContactMutation();
  const deleteSelectedContact = contactId => deleteContact(contactId);

  const filteredContacts = () => {
    // const normalizedFilter = filter.toLowerCase();
    return (
      contacts &&
      contacts.filter(
        contact => contact.name.toLowerCase()
        // .includes(normalizedFilter)
      )
    );
  };

  const filteredContactList = filteredContacts();
  return (
    <ContactListEl>
      {contacts &&
        filteredContactList.map(({ id, name, phone }) => {
          return (
            <ContactListItem key={id}>
              <Contact
                name={name}
                phone={phone}
                onDeleteContact={deleteSelectedContact}
                contactId={id}
              />
            </ContactListItem>
          );
        })}
    </ContactListEl>
  );
}

export default ContactList;
