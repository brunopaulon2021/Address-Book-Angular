import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [
    { id: 1, name: 'John Doe', phoneNumber: '1234567890', email: 'john@example.com', address: '123 Main St' },
    { id: 2, name: 'Jane Smith', phoneNumber: '9876543210', email: 'jane@example.com', address: '456 Elm St' }
  ];

  constructor() { }

  ngOnInit() {
  }
}
