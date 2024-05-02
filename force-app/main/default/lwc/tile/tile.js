import { LightningElement, api, wire } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import CONTACT_SELECTED_CHANNEL from '@salesforce/messageChannel/Contact_Selected__c';

export default class Tile extends LightningElement {
    @api contact;
    @wire(MessageContext) messageContext;
    
    tileClick() {
        const payload = { 
            contact: this.contact,
          };
          publish(this.messageContext, CONTACT_SELECTED_CHANNEL, payload);
    }
}