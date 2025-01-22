import React, { useEffect, useState } from 'react'; // Corrected 'cosnt' to 'const'
import axios from 'axios';

const ViewContact = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/contact/");
      setContacts(response.data);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  return (
    <div>
      <h1>All Contacts</h1>
      <div className="row">
        {contacts.map((contact) => (
          <div key={contact.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{contact.name}</h5>
                <p className="card-text"><strong>Email:</strong> {contact.email}</p>
                <p className="card-text"><strong>Contact No:</strong> {contact.contact_no}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewContact;
