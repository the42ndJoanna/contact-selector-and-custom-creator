import { LightningElement } from 'lwc';
import createNewContact from '@salesforce/apex/ContactController.createNewContact';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ContactCreatorWithInputs extends LightningElement {
    contact = {};

    isInputValid() {
        let isValid = true;
        let inputFields = this.template.querySelectorAll('.validate');
        inputFields.forEach(inputField => {
            if(!inputField.checkValidity()) {
                inputField.reportValidity();
                isValid = false;
            }
            this.contact[inputField.name] = inputField.value;
        });
        return isValid;
    }

    handleSubmit() {
        if(this.isInputValid()) {
            createNewContact(this.contact)
            .then(() => {
                const toastEvent = new ShowToastEvent({
                    title: "Contact created",
                    message: "Welcome " + this.contact.lastName + "!",
                    variant: "success"
                });
                this.dispatchEvent(toastEvent);
            })
            .catch((error) => {
                console.error('Error creating contact:', error);
            });
        }
    }
}