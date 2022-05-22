import { useState } from 'react';
import { Form, Label, Text, Input, AddContactBtn } from './ContactForm.styled';
import { FiUserPlus } from 'react-icons/fi';
import { nanoid } from 'nanoid';
import {
  useFetchContactsQuery,
  useCreateContactMutation,
} from 'redux/contactsApi';

function ContactForm() {
  const { data: contacts } = useFetchContactsQuery();
  const [createContact] = useCreateContactMutation();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleChangeName = e => setName(e.currentTarget.value);
  const handleChangePhone = e => setPhone(e.currentTarget.value);

  const handleSubmit = async e => {
    e.preventDefault();

    const newContact = {
      id: nanoid(),
      name,
      phone,
    };

    contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? alert(`${name} is already in contacts`)
      : await createContact(newContact);
    alert(`${name} is added to your contacts`);
    formReset();
  };

  const formReset = () => {
    setName('');
    setPhone('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        <Text>Name</Text>
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handleChangeName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        <Text>Phone</Text>
        <Input
          placeholder=""
          type="tel"
          name="phone"
          value={phone}
          onChange={handleChangePhone}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <AddContactBtn type="submit">
        <span style={{ marginRight: '10px' }}>Add</span>
        <FiUserPlus />
      </AddContactBtn>
    </Form>
  );
}

export default ContactForm;
