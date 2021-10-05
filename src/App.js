import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Phonebook from './components/Phonebook/Phonebook';
import Container from './components/Container/Container';
import Contacts from './components/Contacts/Contacts';
import Filter from './components/Filter/Filter';

function App() {
    const defaultContacts = [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];

    const [contacts, setContacts] = useState(
        () =>
            JSON.parse(window.localStorage.getItem('contacts')) ??
            defaultContacts,
    );
    const [filter, setFilter] = useState('');

    const formSubmitHandler = (name, number) => {
        const normalizedName = name.toLowerCase();

        const checkedForName = contacts.find(
            contact => normalizedName === contact.name.toLowerCase(),
        );

        if (checkedForName) {
            return toast.error(`${name} is already in contacts`);
        }

        const newContact = {
            id: uuidv4(),
            name,
            number,
        };

        setContacts(prevState => [newContact, ...prevState]);
    };

    const changeFilter = e => {
        setFilter(e.currentTarget.value);
    };

    useEffect(() => {
        window.localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

    const getVisibleContacts = () => {
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter),
        );
    };

    const deleteContact = contactId => {
        setContacts(prevState =>
            prevState.filter(contact => contact.id !== contactId),
        );
    };

    return (
        <Container>
            <h1>Phonebook</h1>
            <Phonebook onSubmit={formSubmitHandler} />
            <h2>Contacts</h2>
            <ToastContainer />
            <Filter value={filter} onChange={changeFilter} />
            <Contacts
                data={getVisibleContacts()}
                onDeleteContact={deleteContact}
            />
        </Container>
    );
}

export default App;
