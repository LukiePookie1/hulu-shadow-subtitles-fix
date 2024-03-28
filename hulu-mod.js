// ==UserScript==
// @name         Hulu - Remove Control Bar Shadow
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Removes the shadow that pops up when moving the mouse to view the control bar on Hulu
// @match        https://www.hulu.com/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    // Remove the shadow/linear gradient from the control bar
    GM_addStyle(`
        .FliptrayWrapper:before {
            display: none !important;
        }
    `);
})();
