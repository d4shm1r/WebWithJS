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


class Nav {
    constructor() {
        this.body = document.body;
        this.nav = this.createElement("nav", "page-nav");
        this.div = this.createElement("div", "container");

        this.linkNames = ["index", "about", "schedule", "register", "location", "live", "feedback"];

        for (let i = 0; i < this.linkNames.length; i++) {
            this.a = this.createElement("a");
            this.a.href = `/${this.linkNames[i]}.html`;
            this.a.textContent = `${this.linkNames[i]}.`.charAt(0).toUpperCase() + `${this.linkNames[i]}`.slice(1);

            if (this.linkNames[i] == "index") {
                this.a.className = "active";
                this.a.textContent = "Home";
            }

            this.div.appendChild(this.a);
        }

        this.nav.appendChild(this.div);
        this.body.appendChild(this.nav);
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

const navBanner = new Nav();




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