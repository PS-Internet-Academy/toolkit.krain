function move_portlet_social(){
    $(".portlet-social-viewlet").replaceWith($("#viewlet-social-like"));

    print_link = $("#content .detail > p a");
    $(".portlet-print-viewlet").html('');

    var print_text= "";
    var lang="";

    if($('#globalwrapper.site-en').length>0)
    {
      lang="en";
      print_text ="Print Listing";
    }
    if($('#globalwrapper.site-es').length>0)
    {
      lang="es";
      print_text ="Imprimir Listado";
     }
     if($('#globalwrapper.site-de').length>0)
     {
       lang="de";
       print_text ="Immobile drucken";
     }

   $(print_link).html(print_text);

   if($(print_link).length>0)
   {
    $(".portlet-print-viewlet").append($(print_link));
   }
   if($(print_link).length<1)
   {
    $(".portlet-print-viewlet").css("width" , "0");
   }
}

$(document).ready(function(){
    if($('.portlet-social-viewlet').length>0){
        move_portlet_social();
    }
    
})