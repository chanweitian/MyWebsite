$(document).ready(function () { 
                  
                  init();
                  
                  nav_click();

                  $(window).resize(init);

                  // Using custom configuration
                  $("#interest_content").carouFredSel({
            		  width			: "100%",
            		  align			: "left",
                	  items				: {
                		  visible		: 1  
                	  },
                	  scroll 			: {
                		  easing		: "swing",
                		  items			: 1,
                		  duration		: 500,							
                	  },
                	  auto				: {
                		  play			: false,
                		  duration		: 1000,
                		  pauseOnResize	: true,
                	  },
                	  prev				: {
                		  button		: "#interest_prev",
                		  key			: "left" 
                	  },
                	  next				: {
                		  button		: "#interest_next",
                		  key			: "right" 
                	  }
                  }, {
                      debug 		      : true
                  });	


});

function init(){
    var height = $(window).height() - 60;
    $('#about').height(height);
    $('#home').height(height);
    $('#interest').height(height);
    
    $('.img_container').height(height);
    $('.img_container').width($(window).width()-10);
    
    $('#next_button_holder').css({"top":height/2+"px"});
    $('#prev_button_holder').css({"top":height/2+"px"});
    
}

function nav_click(){
    
    $('#nav a').click(function(){
                      var href = $(this).attr('href');
                      $('html, body').stop().animate({scrollTop: $(href).offset().top - 59}, 500);
                      
    });
                      
                      
}





