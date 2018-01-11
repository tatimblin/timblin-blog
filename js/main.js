var elem = document.querySelector('.project-img');
var slides = document.getElementsByClassName('project-img-cell');

var flkty = new Flickity( '.project-img', {
 	// options
 	cellAlign: 'left',
 	contain: true,
	wrapAround: true,
	asNavFor: '.project-nav',
	prevNextButtons: false
});

// element argument can be a selector string
//   for an individual element
var navflkty = new Flickity( '.project-nav', {
 	// options
	wrapAround: true,
	draggable: false,
	asNavFor: '.project-img',
	selectedAttraction: 1,
	friction: 1,
	pageDots: false,
	arrowShape: {
		x0: 10,
		x1: 60,
		y1: 50,
		x2: 60,
		y2: 45,
		x3: 15
	}
});

flkty.on('scroll', function () {
  flkty.slides.forEach(function (slide, i) {
    var image = slides[i];
    var x = (slide.target + flkty.x) * -1/3;
    image.style.backgroundPosition = x + 'px center';
  });
});




// SEE PROJECT-HERO.HTML

//var elem = document.querySelector('.project-img');
//var flkty = new Flickity( elem, {
//	
//	cellAlign: 'left',
//	contain: true,
//	draggable: false,
//	wrapAround: true,
//	bgLazyLoad: true,
//	pageDots: false,
//	prevNextButtons: false,
//	autoPlay: 7000,
//	selectedAttraction: 0.025,
//	friction: 0.4
//});
//
//var elemNav = document.querySelector('.project-nav');
//var flktyNav = new Flickity( elemNav, {
//	cellAlign: 'left',
//	asNavFor: '.project-img',
//	contain: false,
//	
//	wrapAround: true,
//	pageDots: false,
//	prevNextButtons: false,
//	selectedAttraction: 0.035,
//	friction: 0.6,
//	dragThreshold: 10000
//});
//
//flktyNav.on( 'staticClick', function( event, pointer, cellElement, cellIndex ) {
//	if ( typeof cellIndex == 'number' ) {
//		flktyNav.selectCell( cellIndex );
//	}
//});
//
//var imgs = elem.querySelectorAll('.project-img-cell img');
//
//var docStyle = document.documentElement.style;
//var transformProp = typeof docStyle.transform == 'string' ?
//  'transform' : 'WebkitTransform';
//
//flkty.on( 'scroll', function() {
//  flkty.slides.forEach( function( slide, i ) {
//    var img = imgs[i];
//    var x = ( slide.target + flkty.x ) * -1/3;
//    img.style[ transformProp ] = 'translateX(' + x  + 'px)';
//  });
//});
//
//
//
//elemNav.addEventListener( 'mouseenter', function() {
//  flkty.pausePlayer();
//  elemNav.addEventListener( 'mouseleave', onNavMouseleave );
//});
//
//function onNavMouseleave() {
//  flkty.unpausePlayer();
//  elemNav.removeEventListener( 'mouseleave', onNavMouseleave );
//}




window.sr = ScrollReveal();

sr.reveal('.project-list-item',
{
    distance: '100px',
    duration: 700
}
);

var elem = document.querySelector('.main-carousel');
var flktyLab = new Flickity( elem, {
  // options
  cellAlign: 'center',
  contain: true,
  wrapAround: true,
  autoPlay: 2500,
	prevNextButtons: false,
	pageDots: false
});

// element argument can be a selector string
//   for an individual element
var flktyLab = new Flickity( '.main-carousel', {
  // options
});


// Scrollmagic Section Snippet

var controller = new ScrollMagic.Controller();
// build tween
var listHeight = document.querySelector('.section-field-post_wrap').clientHeight;
	
var tween = TweenMax.staggerFromTo(".section-field-post_wrap", 2, {y: 0}, {y: -listHeight/2}, 0.15);

// build scene
var scene = new ScrollMagic.Scene({triggerElement: ".section-field-snippet", triggerHook: 0.95, duration: 800})
					.setTween(tween)
					.addTo(controller);

// Connect Section Hover Color Change

var connectEle = document.getElementsByClassName('section-social')[0];
var connectWrap = document.getElementsByClassName('section-connect_wrap')[0];
var socialColor = [
        '#1da1f2', '#343436', '#4078c0', '#ea4c89', '#ea4335'
    ];

for(i=0; i<connectEle.children.length;i++){
    (function(i) {
        connectEle.children[i].onmouseover = function() {
            connectWrap.style.background=socialColor[i];
        }
        connectEle.children[i].onmouseout = function() {
            connectWrap.style.background='#FF1744';
        }
    }(i));
}


// Seperate Lettering
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,n.charming=e()}}(function(){return function e(n,r,o){function t(i,u){if(!r[i]){if(!n[i]){var d="function"==typeof require&&require;if(!u&&d)return d(i,!0);if(f)return f(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var l=r[i]={exports:{}};n[i][0].call(l.exports,function(e){var r=n[i][1][e];return t(r?r:e)},l,l.exports,e,n,r,o)}return r[i].exports}for(var f="function"==typeof require&&require,i=0;i<o.length;i++)t(o[i]);return t}({1:[function(e,n,r){n.exports=function(e,n){function r(e){for(var n=e.parentNode,r=e.nodeValue,i=r.length,u=-1;++u<i;){var d=document.createElement(o);t&&(d.className=t+f,f++),d.appendChild(document.createTextNode(r[u])),n.insertBefore(d,e)}n.removeChild(e)}n=n||{};var o=n.tagName||"span",t=null!=n.classPrefix?n.classPrefix:"char",f=1;!function e(n){if(n.nodeType===Node.TEXT_NODE)return r(n);var o=Array.prototype.slice.call(n.childNodes),t=o.length;if(1===t&&o[0].nodeType===Node.TEXT_NODE)return r(o[0]);for(var f=-1;++f<t;)e(o[f])}(e)}},{}]},{},[1])(1)});

var element = document.querySelector("#my-name");
charming(element);







