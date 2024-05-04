import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import FIRST_NAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LAST_NAME_FIELD from '@salesforce/schema/Contact.LastName';
import TITLE_FIELD from '@salesforce/schema/Contact.Title';
import DEPARTMENT_FIELD from '@salesforce/schema/Contact.Department';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';
import ORDER_AMOUNT_FIELD from '@salesforce/schema/Contact.Order_Amount__c';

export default class ContactCreator extends LightningElement {
    objectApiName = CONTACT_OBJECT;
    fields = [FIRST_NAME_FIELD, LAST_NAME_FIELD, TITLE_FIELD, DEPARTMENT_FIELD, EMAIL_FIELD, PHONE_FIELD, ORDER_AMOUNT_FIELD];
    
    handleSuccess(event) {
        const toastEvent = new ShowToastEvent({
            title: "Contact created",
            message: "Welcome " + event.detail.fields.LastName.value + "!",
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
    }
}