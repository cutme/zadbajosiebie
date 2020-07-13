import Blazy from 'blazy';
//const { detect } = require('detect-browser');
//const browser = detect();

document.addEventListener('DOMContentLoaded',function() {

/*
    if (browser) {
        document.documentElement.classList.add(browser.name);
    }
*/

    const cover = document.getElementById('cover');
    
    const init = function() {
        document.documentElement.removeAttribute('style');
        document.body.classList.add('is-loaded');
        
        setTimeout(function() {
            cover.remove();
        }, 250);

        window.bLazy = new Blazy();

        // Anims on inview
//        window.animsInit()   
    };
    
    
    window.addEventListener('load', init);

}, false);