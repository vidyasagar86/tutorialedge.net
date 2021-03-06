import {LitElement, html, customElement} from 'lit-element';
// @ts-ignore
import { Auth } from '../auth/index.ts';

@customElement("redirect-component")
export class Redirect extends LitElement{
    
    auth: any;

    constructor() {
        super();     
        this.auth = new Auth();

        this.auth.handleAuthentication()
            .then(() => {
                window.location.assign("/profile/");
            })
    }


    static get properties() {
        return {
            user: {}
        }
    }

    static get template() {
        return html`
        <img src="https://images.tutorialedge.net/images/logo.png" alt="logo" />
		<h1>Redirecting</h1>
		<p>You have successfully logged in. You are now being redirected to the profile page...</p>
		<p class="text-muted">If there are any issues, then please let me know by raising on here: <a href="https://github.com/elliotforbes/tutorialedge.net">elliotforbes/tutorialedge.net</a>
        </p>`;
    }

}  
