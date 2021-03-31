$(document).ready(function () {
   
   

    $(window).on('load', function(){
        $.instagramFeed({
          'username': 'grzegorz.jelen.92',
          'container': "#instagram-feed-demo"
        });
      });

      //profile biography
      $(window).on('load', function(){
        $.instagramFeed({
          'username': 'grzegorz.jelen.92',
          'container': "#instagram-feed-demo",
          'display_profile': true,
          'display_biography': true,
          'display_igtv': false,
          'items': 8,
          'items_per_row': 5,
          'margin': 0.5,
          'display_gallery':true




        });
      });
      
//////////////////////////

    //   $( ".instagram_feed  .instagram_gallery" ).addClass( "owl-carousel about-insta owl-theme" );
    //   $( ".instagram_feed  .instagram-image" ).addClass( "item" );

alert()

      $('.instagram_gallery').owlCarousel({
          
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:2
            },
            1000:{
                items:2
            }
        }
    })

      	


      
  
  });