import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ViewContact.css"; // Custom CSS file

const ViewContact = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/contact/delete/${id}`);
      // Filter out the deleted contact
      setContacts((prevContacts) =>
        prevContacts.filter((contact) => contact.id !== id)
      );
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  const fetchContacts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/contact/");
      setContacts(response.data);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">All Contacts</h1>
      <div className="row">
        {contacts.map((contact) => (
          <div key={contact.id} className="col-md-4 mb-4">
            <div className="card shadow-sm contact-card">
              <div className="card-body">
                <h5 className="card-title">{contact.name}</h5>
                <p className="card-text">
                  <strong>Email:</strong> {contact.email}
                </p>
                <p className="card-text">
                  <strong>Contact No:</strong> {contact.contact_no}
                </p>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(contact.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewContact;
