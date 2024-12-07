import React, { useState, useEffect } from 'react';
import './App.css';

// Main App component
function App() {
  // Creating State for storing data
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedUserIds, setExpandedUserIds] = useState([]); // Change to array

  // Fetching contact data from the provided API
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setContacts(data))
      .catch(err => console.error('Error fetching contacts:', err));
  }, []);

  // Filtering contacts based on search term
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleDetails = (userId) => {
    setExpandedUserIds(prevState =>
      prevState.includes(userId)
        ? prevState.filter(id => id !== userId)
        : [...prevState, userId]
    );
  };

  return (
    <div className="App">
      <main>
        <h1>Contacts</h1>
        <input
          type="text"
          placeholder="Search contacts..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}  // Filtering contacts based on search term
          style={{ padding: '10px', margin: '20px', width: '300px' }}
        />
        <ul>
          {filteredContacts.map(contact => (
            <li key={contact.id}>
              <h2>{contact.name}</h2>
              <p><strong>Email:</strong> {contact.email}</p>
              <p><strong>Phone:</strong> {contact.phone}</p>
              {expandedUserIds.includes(contact.id) && (
                <div>
                  <p><strong>Username:</strong> {contact.username}</p>
                  <p><strong>Address:</strong> {contact.address.street}, {contact.address.suite}, {contact.address.city}, {contact.address.zipcode}</p>
                  <p><strong>Geo:</strong> {contact.address.geo.lat}, {contact.address.geo.lng}</p>
                  <p><strong>Website:</strong> {contact.website}</p>
                  <p><strong>Company:</strong> {contact.company.name}</p>
                  <p><strong>CatchPhrase:</strong> {contact.company.catchPhrase}</p>
                  <p><strong>BS:</strong> {contact.company.bs}</p>
                </div>
              )}
              <div>
                <button className="button" onClick={() => toggleDetails(contact.id)}>
                  {expandedUserIds.includes(contact.id) ? 'Show Less' : 'Show More'}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App; // Exports App
