jQuery.fn.exists = function(){return this.length>0;};

$(document).ready(function () {
  $("ul.dropdown-menu li").addClass('submenu_item');
  
  $(".portletWrapper:not(:has(dt.portletHeader))").addClass("nobg");

 if($('.portletAgentInformation .agency_logo').exists()){
     var logo = $('.portletAgentInformation .agency_logo');
     $('.portletAgentInformation .agency_logo').remove();
     $('.portletAgentInformation .portletItem').append(logo);    
    
 }    
});