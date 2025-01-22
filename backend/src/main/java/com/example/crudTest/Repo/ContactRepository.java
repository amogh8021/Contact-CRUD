package com.example.crudTest.Repo;

import com.example.crudTest.Entity.Contact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ContactRepository  extends JpaRepository<Contact, Long> {


}
