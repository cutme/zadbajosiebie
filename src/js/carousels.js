//import Glide from '@glidejs/glide';
//import css from '../../node_modules/@glidejs/glide/src/assets/sass/glide.core.scss';

import Siema from 'siema';

document.addEventListener('DOMContentLoaded',function() {

    const recommended = document.getElementById('recommendedCarousel');
    let siemaObj, ww = window.innerWidth, status = false;
    
    
    const startSiema = function() {
	    siemaObj = new Siema();
	    console.log('start siema');
	}
	
	const destroytSiema = function() {
	    siemaObj.destroy(true);
	}
    
    const init = function() {
	    
	    const checkWidth = function() {
		    ww = window.innerWidth

		    if (ww <= 1024) {
			    if (status === false) {
				    startSiema();
				    status = true;
				}
		    } else {
			    if (status === true) {
				    destroytSiema();
				    status = false;
				}
		    }
		};
		
		checkWidth();
	    
	    window.addEventListener('resize', checkWidth);
    }
    
    if (recommended) {
	    window.addEventListener('load', init);
	}


}, false)