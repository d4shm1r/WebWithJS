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


class Header {
    constructor() {
        this.body = document.body;
        this.header = this.createElement("header", "page-header");
        this.div = this.createElement("div", "container");
        this.h1 = this.createElement("h1");
        this.h1.textContent = "ContosoConf";
        this.p = this.createElement("p", "tag-line");
        this.p.textContent = "A two-track conference on the latest HTML5 developments";
        this.a = this.createElement("a", "register");
        this.a.href = "/register.html";
        this.a.textContent = "Register";
        this.br = this.createElement("br");
        this.span = this.createElement("span", "free");
        this.span.innerHTML = "&#183; Free &#183;";

        this.a.appendChild(this.br);
        this.a.appendChild(this.span);

        this.div.appendChild(this.h1);
        this.div.appendChild(this.p);
        this.div.appendChild(this.a);

        this.header.appendChild(this.div);
        this.body.appendChild(this.header);
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

const headerBanner = new Header();




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