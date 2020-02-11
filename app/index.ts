import { setupTippy } from './content/tippy.ts'
import { loadDeferredImgs } from './content/images.ts'
import * as Cookie from 'es-cookie'
import * as Mustache from 'mustache'
import { Auth } from './users/auth.ts'

function initialize() {
    let auth = new Auth()
    loadDeferredImgs()
    setupTippy()

    switch (window.location.pathname) {
        case "/redirect/":
            auth.handleAuthentication()
                .then(() => {
                    window.location.assign('/profile/')
                });
            break;
        case "/profile/":
            console.log(auth.isAuthenticated())
            if(auth.isAuthenticated() !== true) {
                auth.login();
            } else {
                let template = document.getElementById('target').innerHTML;
                Mustache.tags = ["[[", "]]"];
                let rendered = Mustache.render(template, { name: 'Elliot' })
                document.getElementById('target').innerHTML = rendered;
            }            
            break;
        case "/logout/":
            if(auth.isAuthenticated()) {
                auth.logout();
                window.location.assign('/')
            }
            break;
        default:
            break;
    }

    
}

initialize();