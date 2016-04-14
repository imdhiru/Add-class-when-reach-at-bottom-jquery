
 $(document).ready(function() {
                $(window).scroll(function() {
                    if ($('body').height() <= ($(window).height() + $(window).scrollTop())) {
                      /*  alert('hi'); */
                        $('.footer-container').addClass('open');
                    }
                    else
                    {
                       $('.footer-container').removeClass('open'); 
                    }
                });
            });  
