import { LightningElement, wire } from 'lwc';
import { subscribe, MessageContext } from 'lightning/messageService';
import CONTACT_SELECTED_CHANNEL from '@salesforce/messageChannel/Contact_Selected__c';

export default class Detail extends LightningElement {
    contact;
    @wire(MessageContext) messageContext;

    subscribeToMessageChannel() {
        this.subscription = subscribe(
          this.messageContext,
          CONTACT_SELECTED_CHANNEL,
          (message) => {this.contact = message.contact}
        );
    }

    connectedCallback() {
        this.subscribeToMessageChannel();
    }
}