// import { Component } from "react";
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from "uuid";
import style from "./App.module.css";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";

function App () {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);


  const addContact = (contactFormState) => {
    const { name, number } = contactFormState;
    const newContact = {
      id: uuidv4(),
      name: name,
      number: number,
    };

    const repeatName = contacts.find(
      ({ name }) => name === contactFormState.name
    );

    if (repeatName !== undefined) {
      alert(`${newContact.name} is already in contact`);
      return;
    }

    setContacts(prevState => [newContact, ...prevState.contacts]);

  };

const filterContacts = (e) => {
    setFilter(e.currentTarget.value);
  };

const deleteContact = (contactId) => {
    setContacts(contacts.filter((id) => id !== contactId))
  };

  const visibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

    return (
      <div>
        <h1 className={style.title}>Phonebook</h1>
        <ContactForm addContact={addContact} />

        <h2 className={style.title}>Contacts</h2>
        <Filter filter={filter} filterContacts={filterContacts} />
        <ContactList
          contacts={visibleContacts}
          deleteContact={deleteContact}
        />
      </div>
    );
  }


export default App;