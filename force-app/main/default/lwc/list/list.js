import { LightningElement, wire } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';

export default class List extends LightningElement {
    contacts = [];
    @wire(getContacts, {}) wiredContacts({ data, error }) {
        if(data) {
          this.contacts = data;
        }
      }

      handleTileClick(evt) {
        const event = new CustomEvent('contactselected', {
          detail: evt.detail,
        });
        this.dispatchEvent(event);
      }
}