//// element argument can be a selector string
////   for an individual element
//var flkty = new Flickity( '.project_wrap', {
//    // options
//    //wrapAround: true,
//    //groupCells: 3,
//    cellAlign: 'left',
//    pageDots: false,
//    prevNextButtons: false,
//    draggable: false
//});
//
//var carousel = document.querySelector('.project_wrap');
//flkty.on( 'staticClick', function( event, pointer, cellElement, cellIndex ) {
//    if ( !cellElement ) {
//        return;
//    }
//    var prevClickedCell = carousel.querySelector('.is-clicked');
//    if ( prevClickedCell ) {
//        prevClickedCell.classList.remove('is-clicked');
//    }
//    cellElement.classList.add('is-clicked');
//})
//
//
//// Flickity View Window
//
//var flktyView = new Flickity( '.project-view_wrap', {
//    // options
//    asNavFor: '.project_wrap',
//    contain: true,
//    pageDots: false,
//    selectedAttraction: 1,
//    friction: 1,
//    prevNextButtons: false,
//    draggable: false
//});
//
//var buttonGroup = document.querySelector('.project_wrap');
//var buttons = buttonGroup.querySelectorAll('.project');
//buttons = fizzyUIUtils.makeArray( buttons );
//
//buttonGroup.addEventListener( 'click', function( event ) {
//  // filter for button clicks
//  if ( !matchesSelector( event.target, '.project' ) ) {
//    return;
//  }
//  var index = buttons.indexOf( event.target );
//  flktyView.select( index );
//});
//
//// Project Tabs
//
//function openTab(evt, cityName) {
//    // Declare all variables
//    var i, tabcontent, tablinks;
//
//    // Get all elements with class="tabcontent" and hide them
//    tabcontent = document.getElementsByClassName("project-view-tabContent");
//    for (i = 0; i < tabcontent.length; i++) {
//        tabcontent[i].style.display = "none";
//    }
//
//    // Get all elements with class="tablinks" and remove the class "active"
//    tablinks = document.getElementsByClassName("project-view-tab-item");
//    for (i = 0; i < tablinks.length; i++) {
//        tablinks[i].className = tablinks[i].className.replace(" active", "");
//    }
//
//    // Show the current tab, and add an "active" class to the button that opened the tab
//    var tabs = document.querySelectorAll('.'+cityName);
//    for (var i = 0; i < tabs.length; i++) {
//        tabs[i].style.display = "block";
//    }
//}

window.sr = ScrollReveal();

sr.reveal('.project-list-item',
{
    distance: '100px',
    duration: 700
}
);

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
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
var flkty = new Flickity( '.main-carousel', {
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





