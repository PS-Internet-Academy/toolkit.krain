function init_toggler(){
     $('.toggler_hide').hide();
}

function SwitchClick(){
    $('.top-carousel').after('<button class="switch_button">&nbsp;</div');
    if($('.switch_button').length>0){
    }
    $('.switch_button').click(function(){
        $('.toggler_hide').fadeToggle();
        $('.toggler_default').fadeToggle();
    });
}

function sync_default_hide(){
    var parent_class =$('.toggler_default').parent().attr('class');
    $( ".toggler_hide" ).parent().attr('class', parent_class);
    var test11 =$( ".toggler_hide" ).parent().attr('class');

}

$(document).ready(function(){
    if($('.toggler_default').length>0){
        init_toggler();
        SwitchClick();
        sync_default_hide();
    }
    
})