function add_listingtype(listing){
    var my_text ='<div id="msnew">' + $(listing).find(".title a").attr("title") + '</div>';
        if(my_text == '<div id="msnew">Wohnimmobilie zur Miete</div>')
           {
               my_text = '<div id="msnew">Zur Miete</div>';
           }
        if(my_text == '<div id="msnew">Wohnimmobilie zum Kauf</div>')
          {
               my_text = '<div id="msnew">Zum Kauf</div>';
          }
    $('.price #msnew').css("position","absolute");
    $(listing).children('.price').prepend(my_text);

}

$(document).ready(function(){
    $('.mls-listing').each(function() {
    add_listingtype(this);

 });
});