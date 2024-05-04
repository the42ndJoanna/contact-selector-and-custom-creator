import { LightningElement } from 'lwc';
import createNewContact from '@salesforce/apex/ContactController.createNewContact';

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
                console.log("Contact created successfully.")
            })
            .catch((error) => {
                console.error('Error creating contact:', error);
            });
        }
    }
}