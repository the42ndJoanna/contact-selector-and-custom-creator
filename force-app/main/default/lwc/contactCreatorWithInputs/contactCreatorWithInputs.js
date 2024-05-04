import { LightningElement } from 'lwc';

export default class ContactCreatorWithInputs extends LightningElement {
    contact = {};

    isInputValid() {
        let isValid = true;
        // validate all input values and update contact object
        return isValid;
    }

    handleSubmit() {
        if(this.isInputValid()) {
            // call apex method to create new contact
        }
    }
}