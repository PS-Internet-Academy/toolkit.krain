function move_feature_listing_slider(){
    $(".cover-featured-carousel").replaceWith($("#feature-listing-slider"));
    $(".cover-featured-move-slider").replaceWith($("#feature-listing-above-footer"));
}

$(document).ready(function(){
    if($('#feature-listing-slider').length>0){
        move_feature_listing_slider();
    }
    
})