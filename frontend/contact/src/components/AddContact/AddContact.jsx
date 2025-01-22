import React, { useState } from 'react';
import axios from 'axios';
import './AddContact.css'; // Custom CSS file

const AddContact = () => {
  const [formdata, setFormdata] = useState({
    name: '',
    contact_no: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formdata); 
    try {
      const response = await axios.post("http://localhost:8080/contact/add", formdata);
      alert("Data added successfully!");
    } catch (error) {
      console.error("Error while adding contact", error);
      alert("Error while adding contact.");
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Add Contact</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formdata.name}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Contact No"
            name="contact_no"
            value={formdata.contact_no}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formdata.email}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">Submit</button>
      </form>
    </div>
  );
};

export default AddContact;
