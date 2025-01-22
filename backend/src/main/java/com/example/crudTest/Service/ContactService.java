package com.example.crudTest.Service;


import com.example.crudTest.Entity.Contact;
import com.example.crudTest.Repo.ContactRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ContactService {

    private ContactRepository contactRepository;

    public ContactService(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }
//method to add a contact

    public Contact createContact(Contact contact) {
        return contactRepository.save(contact);
    }

    //method to get all contacts

    public List<Contact> getAllContact() {
        return contactRepository.findAll();
    }

    //method to get a contact by id

    public Optional<Contact> getContactById(Long id) {
        return contactRepository.findById(id);

    }

    //method to delete a contact

    public void deleteContact(Long id) throws Exception {

        if (contactRepository.existsById(id)) {
            contactRepository.deleteById(id);
        } else throw new Exception("contact not found , unable to delete");
    }

    public Contact updateContact(Long id, Contact cont) throws Exception {
        Optional<Contact> userExist = contactRepository.findById(id);

        if (userExist.isPresent()) {
            Contact contact = userExist.get();

            // Update the contact fields with the new data from `cont`
            contact.setName(cont.getName());
            contact.setEmail(cont.getEmail());
            contact.setContact_no(cont.getContact_no());

            // Save and return the updated contact
            return contactRepository.save(contact);
        } else {
            throw new Exception("Unable to update the contact. Contact not found.");
        }
    }
}


