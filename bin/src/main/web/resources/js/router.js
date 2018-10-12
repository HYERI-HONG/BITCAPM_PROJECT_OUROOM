"use strict";
function Session(x){
	sessionStorage.setItem('context',x);
	sessionStorage.setItem('script',x+'/resources/js');
	sessionStorage.setItem('style',x+'/resources/css');
	sessionStorage.setItem('img', x + '/resources/img');
	return {
		context : ()=>{return sessionStorage.getItem('context');},
		script : ()=>{return sessionStorage.getItem('script');},
		style : ()=>{return sessionStorage.getItem('style');},
		img : () => {return sessionStorage.getItem('img');}
	};
}