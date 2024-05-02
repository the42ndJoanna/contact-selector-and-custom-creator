import { LightningElement, api } from 'lwc';

export default class Tile extends LightningElement {
    @api contact;

    tileClick() {
        const event = new CustomEvent('tileclick', {
            detail: this.contact,
            bubbles: true
        });
        this.dispatchEvent(event);
    }
}