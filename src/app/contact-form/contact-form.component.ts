// src/app/contact-form/contact-form.component.ts

import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  contact: Contact = {
    id: 0,
    name: '',
    phoneNumber: '',
    email: ''
  };

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
  }

  saveContact(): void {
    if (this.contact.id === 0) {
      this.contactService.addContact(this.contact);
    } else {
      this.contactService.updateContact(this.contact);
    }
    this.clearForm();
  }

  clearForm(): void {
    this.contact = {
      id: 0,
      name: '',
      phoneNumber: '',
      email: ''
    };
  }
}
