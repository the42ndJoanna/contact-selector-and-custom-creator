import { LightningElement, wire } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';

export default class List extends LightningElement {
    contacts = [];
    ready = false;
    @wire(getContacts, {}) contacts({ data, error }) {
        if(data) {
          this.contacts = data;
          this.ready = true;
        }
      }
}