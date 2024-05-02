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

      handleTileClick(evt) {
        const event = new CustomEvent('contactselected', {
          detail: evt.detail,
        });
        this.dispatchEvent(event);
      }
}