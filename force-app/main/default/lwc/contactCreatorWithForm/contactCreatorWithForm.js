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
    firstNameField = FIRST_NAME_FIELD;
    lastNameField = LAST_NAME_FIELD;
    titleField = TITLE_FIELD;
    departmentField = DEPARTMENT_FIELD;
    emailField = EMAIL_FIELD;
    phoneField = PHONE_FIELD;
    orderAmountField = ORDER_AMOUNT_FIELD;
    fields = [FIRST_NAME_FIELD, LAST_NAME_FIELD, TITLE_FIELD, DEPARTMENT_FIELD, EMAIL_FIELD, PHONE_FIELD, ORDER_AMOUNT_FIELD];
    
    handleSuccess(event) {
        const toastEvent = new ShowToastEvent({
            title: "Contact created",
            message: "Welcome " + event.detail.fields.LastName.value + "!",
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
    }

    handleSubmit(event){
        event.preventDefault(); // stop the form from submitting
        const fields = event.detail.fields;
        this.template.querySelector('lightning-record-edit-form').submit(fields);
     }
}