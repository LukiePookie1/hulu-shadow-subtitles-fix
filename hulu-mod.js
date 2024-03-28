// ==UserScript==
// @name         Hulu Shadow Modifications
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Modify Hulu UI to Minimize Shadow
// @match        https://www.hulu.com/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    // Remove bottom shadow
    GM_addStyle(`
        .FliptrayWrapper:before {
            content: "" !important;
            top: unset !important;
        }
    `);

})();
