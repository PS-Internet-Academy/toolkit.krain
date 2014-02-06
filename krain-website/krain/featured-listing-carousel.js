/*jslint bitwise:true, newcap:true, nomen:true, onevar:true, plusplus:true, regexp:true */
/*globals $:false, console:false, jQuery:false */

jQuery('html').addClass('hideTools');

$.easing.custom = function (x, t, b, c, d, s) {
if (s === undefined) s = 1.70158;
return c*(t/=d)*t*((s+1)*t - s) + b;
};

function check_carousel(foo){
    if (foo.length >0){
        return foo;
    }
    else{
        setTimeout(function(){ check_carousel(foo); } , 2000);
    }   
}

function check_autoscroll(foo){
    var tester = false;
    tester = $.isFunction(foo.autoscroll);
    if(tester){
        return true;
    }
    else{
        return false;    
    }       
        
}
    

var api,
ap = true,
timer = 7000;

$(document).ready(function(){

    jQuery.fn.resizeCarousel = function () {
        return this.each(function () {
            // get the scrollable API for this carousel
            var imgHeight, baseHeight;
            $this = $(this);
            $carousel = check_carousel($this);
            api = $carousel.data('scrollable');
            $items = api.getItems();
            $images = $('img', $items);
            carouselWidth = $('.scrollable .items .tileItem').width();
            clonedClass = api.getConf().clonedClass;

            // We are resizing carousel after it has been initialized. Since it could have different default width, we need to make sure the carousel is focused on the correct item to avoid the carousel having 'sliced in half' position. In this case we position on the first item, that follows the first cloned item
            api.getItemWrap().attr('style', 'left: -' + carouselWidth + 'px');

            jQuery.each($items, function () {
                // Adjust the widths of the carousel items
            $(this).add($('.' + clonedClass, $carousel)).width(carouselWidth);
            });

// Adjust the heights of the carousel items. We can not do
// this in the same jQuery.each loop with tthe width, because we
// need all of the items to re-flow after width's adjustments.
baseHeight = Math.max.apply(Math,$items.map(function () {return $(this).height();}).get());

if ($images.length === 0) {
    $this.add($carousel).height(baseHeight).trigger('resized.carousel', [baseHeight]);
} else {
    $images.load(function () {
        var newHeight = Math.max.apply(Math,
        $items.map(function () { return $(this).height();}).get());
    
        if (newHeight >= baseHeight) {
            $this.add($carousel).height(newHeight).trigger('resized.carousel', [newHeight]);
        }
    });
    
    //trigger resizing manually
    $this.add($carousel).height(baseHeight).trigger('resized.carousel', [baseHeight]);
    }
});
};

featured_carousel = $('#feature-listing-above-footer div.scrollable').scrollable({
    size: 1,
    clickable: true,
    loop: true,
    circular: true,
    speed: 1600,
    easing: 'custom'
});

if(check_autoscroll(featured_carousel)){
    featured_carousel.autoscroll({
        autoplay: true,
        steps: 1,
        interval: timer,
        autopause: true,
        direction: "right"}).navigator({
            api: true
        });
    
    }
api = $('#feature-listing-above-footer div.scrollable').data('scrollable');
$('#feature-listing-above-footer .carousel div.scrollable').resizeCarousel();


portletCarouselWrapper_carousel = $('.portletCarouselWrapper div.scrollable').scrollable({
    size: 1,
    clickable: true,
    loop: true,
    circular: true,
    speed: 1600,
    easing: 'custom'
});

if(check_autoscroll(portletCarouselWrapper_carousel)){
    portletCarouselWrapper_carousel.autoscroll({
        autoplay: true,
        steps: 1,
        interval: timer,
        autopause: true,
        direction: "right"}).navigator({
            api: true
        });
    
    }
//api = $('.portletCarouselWrapper div.scrollable').data('scrollable');
//$('.portletCarouselWrapper .carousel').resizeCarousel();

// Pause on hover
if (api) {
$('#feature-listing-above-footer div.scrollable').hover(api.pause, api.play);
}

// Show toolBar when hovering over a carousel
$('#feature-listing-above-footer .carousel').hover(
function () {
$(this).find('.toolBar').eq(0).slideToggle('fast');
});
});