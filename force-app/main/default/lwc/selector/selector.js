import { LightningElement } from 'lwc';

export default class Selector extends LightningElement {
    selectedContact;

    handleContactSelected(evt) {
        this.selectedContact = evt.detail;
    }

}