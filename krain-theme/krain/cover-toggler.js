function SwitchClick(){
    $('.top-carousel').after('<button class="switch_button">&nbsp;</div');
    $('.top-carousel').after('<button class="global_switch_button">&nbsp;</div');
    $('.global_switch_button').hide();
    if($('.switch_button').length>0){   
    $('.switch_button').click(function(){
        $('.toggler_map_hide').fadeToggle();
        $('.toggler_default').fadeToggle();
        $('.global_switch_button').fadeToggle();
        $('.switch_button').fadeToggle();
    });
    }
    if($('.global_switch_button').length>0){   
    $('.global_switch_button').click(function(){
        $('.toggler_map_hide').fadeToggle();
        $('.toggler_default').fadeToggle();
        $('.global_switch_button').fadeToggle();
        $('.switch_button').fadeToggle();
    });
    }
}

function NorthernLowlands(){
    if($('.northernlowlands').length>0){
    $('.northernlowlands').click(function(){
        $('.northernlowlands_hide').fadeToggle();
        $('.toggler_map_hide').fadeToggle();
        $('.switch_button').fadeToggle();
    });
    }
}

function Guanacaste(){
    if($('.guanacaste').length>0){
    $('.guanacaste').click(function(){
        $('.guanacaste_hide').fadeToggle();
        $('.toggler_map_hide').fadeToggle();
        $('.switch_button').fadeToggle();
    });
    }
}

function Nicoya(){
    if($('.nicoya').length>0){
    $('.nicoya').click(function(){
        $('.nicoya_hide').fadeToggle();
        $('.toggler_map_hide').fadeToggle();
        $('.switch_button').fadeToggle();
    });
    }
}

function CentralPacific(){
    if($('.centralpacific').length>0){
    $('.centralpacific').click(function(){
        $('.centralpacific_hide').fadeToggle();
        $('.toggler_map_hide').fadeToggle();
        $('.switch_button').fadeToggle();
    });
    }
}

function CentralValleyAndHighlands(){
    if($('.centralvalleyandhighlands').length>0){
    $('.centralvalleyandhighlands').click(function(){
        $('.centralvalleyandhighlands_hide').fadeToggle();
        $('.toggler_map_hide').fadeToggle();
        $('.switch_button').fadeToggle();
    });
    }
}

function Caribbean(){
    if($('.caribbean').length>0){
    $('.caribbean').click(function(){
        $('.caribbean_hide').fadeToggle();
        $('.toggler_map_hide').fadeToggle();
        $('.switch_button').fadeToggle();
    });
    }
}

function SouthPacific(){
    if($('.southpacific').length>0){
    $('.southpacific').click(function(){
        $('.southpacific_hide').fadeToggle();
        $('.toggler_map_hide').fadeToggle();
        $('.switch_button').fadeToggle();
    });
    }
}

function NorthernLowlandsBack(){
    $('.northernlowlandsback').click(function(){
        $('.northernlowlands_hide').fadeToggle();
        $('.toggler_map_hide').fadeToggle();
        $('.switch_button').fadeToggle();
    });
}

function GuanacasteBack(){
    $('.guanacasteback').click(function(){
        $('.guanacaste_hide').fadeToggle();
        $('.toggler_map_hide').fadeToggle();
        $('.switch_button').fadeToggle();
    });
}

function NicoyaBack(){
    $('.nicoyaback').click(function(){
        $('.nicoya_hide').fadeToggle();
        $('.toggler_map_hide').fadeToggle();
        $('.switch_button').fadeToggle();
    });
}

function CentralPacificBack(){
    $('.centralpacificback').click(function(){
        $('.centralpacific_hide').fadeToggle();
        $('.toggler_map_hide').fadeToggle();
        $('.switch_button').fadeToggle();
    });
}

function CentralValleyAndHighlandsBack(){
    $('.centralvalleyandHighlandsback').click(function(){
        $('.centralvalleyandhighlands_hide').fadeToggle();
        $('.toggler_map_hide').fadeToggle();
        $('.switch_button').fadeToggle();
    });
}

function CaribbeanBack(){
    $('.caribbeanback').click(function(){
        $('.caribbean_hide').fadeToggle();
        $('.toggler_map_hide').fadeToggle();
        $('.switch_button').fadeToggle();
    });
}

function SouthPacificBack(){
    $('.southpacificback').click(function(){
        $('.southpacific_hide').fadeToggle();
        $('.toggler_map_hide').fadeToggle();
        $('.switch_button').fadeToggle();
    });
}
function sync_default_hide(){
    var parent_class =$('.toggler_default').parent().attr('class');
    $( ".toggler_map_hide" ).parent().attr('class', parent_class);
    $( ".northernlowlands_hide" ).parent().attr('class', parent_class);
    $( ".guanacaste_hide" ).parent().attr('class', parent_class);
    $( ".nicoya_hide" ).parent().attr('class', parent_class);
    $( ".centralpacific_hide" ).parent().attr('class', parent_class);
    $( ".centralvalleyandhighlands_hide" ).parent().attr('class', parent_class);
    $( ".caribbean_hide" ).parent().attr('class', parent_class);
    $( ".southpacific_hide" ).parent().attr('class', parent_class);
    var test11 =$( ".toggler_map_hide" ).parent().attr('class');
    var test12 =$( ".northernlowlands_hide" ).parent().attr('class');
    var test13 =$( ".guanacaste_hide" ).parent().attr('class');
    var test14 =$( ".nicoya_hide" ).parent().attr('class');
    var test15 =$( ".centralpacific_hide" ).parent().attr('class');
    var test16 =$( ".centralvalleyandhighlands_hide" ).parent().attr('class');
    var test17 =$( ".caribbean_hide" ).parent().attr('class');
    var test18 =$( ".southpacific_hide" ).parent().attr('class');
}

$(document).ready(function(){
     $('.toggler_default').hide();
     if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $('.toggler_default').show();    
        $('.toggler_map_hide').hide();
    }
     $('.northernlowlands_hide').hide();
     $('.guanacaste_hide').hide();
     $('.nicoya_hide').hide();
     $('.centralpacific_hide').hide();
     $('.centralvalleyandhighlands_hide').hide();
     $('.caribbean_hide').hide();
     $('.southpacific_hide').hide();
    if($('.toggler_default').length>0){       
        SwitchClick();
        sync_default_hide();  
        NorthernLowlands();
        Guanacaste();
        Nicoya();
        CentralPacific();
        CentralValleyAndHighlands();
        Caribbean();
        SouthPacific();
        
        NorthernLowlandsBack();
        GuanacasteBack();
        NicoyaBack();
        CentralPacificBack();
        CentralValleyAndHighlandsBack();
        CaribbeanBack();
        SouthPacificBack();
    }
    
});