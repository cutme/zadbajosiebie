const bodyScrollLock = require('body-scroll-lock');
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;

document.addEventListener('DOMContentLoaded',function() {

    const hamburger = document.getElementsByClassName('js-hamburger')[0];
    const nav = document.getElementsByClassName('js-nav')[0];

    const init = function() {

        const menu = document.getElementsByClassName('js-menu')[0],
              hamburger = document.getElementsByClassName('js-hamburger')[0],
              parent = nav.getElementsByTagName('li');
          
        let ww = 0;
        
/*
        const searchform = document.getElementById('searchform'),
        	  searchform__content = document.getElementById('searchform__content');
*/

        const checkWindowWidth = function() {
            ww = window.innerWidth;

            if (ww > 1024) {

                hideMenu();
            }
        }
        
        const checkWindowHeight = function() {
            wh = window.innerHeight - 100;           
            
            if (wh <= menu.clientHeight) {
				nav.classList.add('is-block');
            } else {
	            nav.classList.remove('is-block');
            }
        };  
        
        const hideMenu = function() {

            enableBodyScroll(nav);
            nav.classList.remove('is-visible');
            hamburger.classList.remove('is-active');
            document.body.classList.remove('mobile-menu');
        };

        const showMenu = function(e) {
        
            if (e.currentTarget.classList.contains('is-active')) {
            
                hideMenu();            
            
            } else {

                disableBodyScroll(nav);
                nav.classList.add('is-visible');
                hamburger.classList.add('is-active');
                document.body.classList.add('mobile-menu');
            }
        };

        

        window.addEventListener('resize', checkWindowWidth);
        window.addEventListener('resize', checkWindowHeight);

        checkWindowWidth();
        checkWindowHeight();

        hamburger.addEventListener('click', showMenu);


        const submenu = function(e) {
        
            if (ww <= 1024) {
                let item = e.currentTarget;
               
                e.stopPropagation();
                
                if (item.classList.contains('menu-item-has-children')) {
                    if (item.classList.contains('is-active')) {
                        item.classList.remove('is-active');
                    } else {
                        item.classList.add('is-active');
                    }
                } else {
                    let url = item.getElementsByTagName('a')[0].getAttribute('href');
                    window.open(url, '_self');
                    hideMenu();
                }

                e.preventDefault() ? e.preventDefault() : e.preventDefault = false;
            }
        }


        for (let j = 0; j < parent.length; j++) {
            parent[j].addEventListener('click', submenu);
        }


        // Hide menu on ESC

        document.addEventListener('keydown', function(evt) {
            // evt = evt || window.event;
            var isEscape = false;
            if ("key" in evt) {
                isEscape = (evt.key == "Escape" || evt.key == "Esc");
            } else {
                isEscape = (evt.keyCode == 27);
            }
            if (isEscape) {
                hideMenu();
            }
        });

    };

    nav ? init() : false;

}, false);