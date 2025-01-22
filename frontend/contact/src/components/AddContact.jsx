import React, { useState } from 'react';
import axios from 'axios'

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
    const response = await axios.post("http://localhost:8080/contact/add",formdata)
    .then(
        alert("data added successfully")
    )
    .catch("error while adding contact ")
  };

  return (
    <div>
      <h1>Add Contact</h1>
      <form onSubmit={handleSubmit}>
      
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={formdata.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Contact No"
          name="contact_no"
          value={formdata.contact_no}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={formdata.email}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddContact;
