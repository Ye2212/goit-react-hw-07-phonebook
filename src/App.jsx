import SectionComponent from './components/Section/Section';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import Message from './components/Message/Message';
import { useFetchContactsQuery } from './redux/contactsApi';

function App() {
  const { data = [] } = useFetchContactsQuery();
  return (
    <SectionComponent>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contact List</h2>
      <Filter />
      {data ? <ContactList /> : <Message message="Contact list is empty." />}
    </SectionComponent>
  );
}

export default App;
