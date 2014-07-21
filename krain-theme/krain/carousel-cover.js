 $(document).ready(function() {
  if($(".toolkit-slider").length>0){
    //$(".toolkit-slider").hide();
  }
});

$(window).load(function() {
  if($(".template-view .toolkit-slider").length>0){
      
    if(Galleria){
        
      Galleria.run('.template-view .toolkit-slider', {
        dataConfig: function(img) {
          return {
            image:$(img).attr('src'),
            title: $(img).attr('alt'),
            description: $(img).parent().siblings('.description').html(),
            link:$(img).parent().attr('href')
          };
        },
        autoplay:8000,
        lightbox: false,
        responsive:true,
        showInfo:true,
        _toggleInfo:true,
        transition:"fadeslide",
        transitionSpeed:"1000",
        thumbCrop:"height",
        carousel:false,
        thumbnails: "empty",
        showCounter:false
        
      });
    }
 
  }
});