import { LightningElement } from 'lwc';

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
            console.log("contact >>>", this.contact)
        }
    }
}