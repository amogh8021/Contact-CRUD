package com.example.crudTest.Controller;

import com.example.crudTest.Entity.Contact;
import com.example.crudTest.Service.ContactService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController

@RequestMapping("/contact")

public class ContactController {

    private final ContactService contactService;

    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    // Get all contacts
    @GetMapping("/")
    @CrossOrigin(origins = "http://localhost:5173")
    public ResponseEntity<List<Contact>> getAllContact() {
        List<Contact> contacts = contactService.getAllContact();
        return new ResponseEntity<>(contacts, HttpStatus.OK);
    }

    // Get contact by id
    @GetMapping("/{id}")
    @CrossOrigin(origins = "http://localhost:5173")
    public ResponseEntity<Contact> getContactById(@PathVariable Long id) {
        Optional<Contact> contact = contactService.getContactById(id);
        if (contact.isPresent()) {
            return new ResponseEntity<>(contact.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    // Add new contact
    @PostMapping("/add")
    @CrossOrigin(origins = "http://localhost:5173")
    public ResponseEntity<Contact> addContact(@RequestBody Contact contact) {
        Contact createdContact = contactService.createContact(contact);
        return new ResponseEntity<>(createdContact, HttpStatus.CREATED);
    }

    // Delete contact by id
    @DeleteMapping("/delete/{id}")
    @CrossOrigin(origins = "http://localhost:5173")
    public ResponseEntity<String> deleteContact(@PathVariable Long id) {
        try {
            contactService.deleteContact(id);
            return new ResponseEntity<>("Contact deleted successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }

    // Update contact by id
    @PutMapping("/update/{id}")
    @CrossOrigin(origins = "http://localhost:5173")
    public ResponseEntity<Contact> updateContact(@PathVariable Long id, @RequestBody Contact cont) {
        try {
            Contact updatedContact = contactService.updateContact(id, cont);
            return new ResponseEntity<>(updatedContact, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }
}
