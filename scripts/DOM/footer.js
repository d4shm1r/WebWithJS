// Program made by:
/*

 /$$$$$$$  /$$   /$$  /$$$$$$  /$$   /$$ /$$      /$$   /$$   /$$$$$$$ 
| $$__  $$| $$  | $$ /$$__  $$| $$  | $$| $$$    /$$$ /$$$$  | $$__  $$
| $$  \ $$| $$  | $$| $$  \__/| $$  | $$| $$$$  /$$$$|_  $$  | $$  \ $$
| $$  | $$| $$$$$$$$|  $$$$$$ | $$$$$$$$| $$ $$/$$ $$  | $$  | $$$$$$$/
| $$  | $$|_____  $$ \____  $$| $$__  $$| $$  $$$| $$  | $$  | $$__  $$
| $$  | $$      | $$ /$$  \ $$| $$  | $$| $$\  $ | $$  | $$  | $$  \ $$
| $$$$$$$/      | $$|  $$$$$$/| $$  | $$| $$ \/  | $$ /$$$$$$| $$  | $$
|_______/       |__/ \______/ |__/  |__/|__/     |__/|______/|__/  |__/

*/




"use strict";


class Footer {
    constructor() {
        this.body = document.body;
        this.footer = this.createElement("footer", "page-footer");
        this.div = this.createElement("div", "container");
        this.p = this.createElement("p");
        this.p.textContent = "Hosted by Contoso";
        this.address = this.createElement("address");
        this.address.innerHTML = "Conference Center<br />1234 Main Street<br />Seattle<br />WA 98999";
        this.p2 = this.createElement("p");
        this.p2.innerHTML = "&#169; 2012 Contoso";

        this.div.appendChild(this.p);
        this.div.appendChild(this.address);
        this.div.appendChild(this.p2);

        this.footer.appendChild(this.div);
        this.body.appendChild(this.footer);
    }

    createElement(tag, className) {
        const element = document.createElement(tag);

        // If element has class
        if (className) {
            element.classList.add(className);
        }

        return element;
    }
}

const footerBanner = new Footer();




/*
 * For Contact information here are some of the links below
 * My Facebook Profile: @d4shm1r | https://facebook.com/d4shm1r
 * My Twitter: @d4shm1r | https://twitter.com/d4shm1r
 * My LinkedIn: @d4shm1r | https://linkedin.com/in/d4shm1r
 * My Instagram: @d4shm1r | https://instagram.com/d4shm1r
 * My Github: @d4shm1r | https://github.com/d4shm1r
 * My Twitch: @d4shm1r | https://twitch.tv/d4shm1r
 * My e-Mail: d4shm1r@hotmail.com or emailto:d4shm1r@hotmail.com
 */