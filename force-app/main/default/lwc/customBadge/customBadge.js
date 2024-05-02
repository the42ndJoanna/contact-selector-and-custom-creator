import { LightningElement, api } from 'lwc';

export default class CustomBadge extends LightningElement {
    @api label;
    currentDate = new Date().getFullYear();
}