
$(document).ready(function() {
    //Preloader
    preloaderFadeOutTime =1000;
    function hidePreloader() {
    var preloader = $('.spinner-wrapper');
    preloader.fadeOut(preloaderFadeOutTime);
    }
    hidePreloader();
    });

    // // modal /
    // $(document).ready(function() {
    //     var url = $("#Geeks3").attr('src');
    //     $("#Geeks2").on('hide.bs.modal', function() {
    //         $("#Geeks3").attr('src', '');
    //     });
    //     $("#Geeks2").on('show.bs.modal', function() {
    //         $("#Geeks3").attr('src', url);
    //     });
    // });



    $(document).ready(function () {
        $(document).on("scroll", onScroll);
        
        //smoothscroll
        $('a[href^="#"]').on('click', function (e) {
            e.preventDefault();
            $(document).off("scroll");
            
            $('a').each(function () {
                $(this).removeClass('active');
            })
            $(this).addClass('active');
          
            var target = this.hash,
           menu = target;
            $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top+2
            }, 500, 'swing', function () {
                window.location.hash = target;
                $(document).on("scroll", onScroll);
            });
        });
    });
    
    function onScroll(event){
        var scrollPos = $(document).scrollTop();
        $('.collapse a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() +1  > scrollPos) {
                $('navbar-nav ul li a').removeClass("active");
                currLink.addClass("active");
            }
            else{
                currLink.removeClass("active");
            }
        });
    }

    $(function () {
        $('.portfolio_image_popup').magnificPopup({
            delegate: 'a', // child items selector, by clicking on it popup will open
            type: 'image',
            gallery: {
                enabled: true
            }
   
        });
    });
   
   //Videos popup
    $(function () {
       $('.portfolio_video_popup').magnificPopup({
           delegate: 'a', // child items selector, by clicking on it popup will open
           type: 'iframe',
           gallery: {
               enabled: true
           }
   
       });
   });
  

    