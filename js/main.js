function main() {
    (function() {

         /*====================================
        Page Scroll
        ======================================*/
        $('a.page-scroll').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              if (target.length) {
                $('html,body').animate({
                  scrollTop: target.offset().top - 40
                }, 900);
                return false;
              }
            }
          });

           /*====================================
        Show Menu on Book
        ======================================*/
        $(window).bind('scroll', function() {
            var navHeight = $(window).height() - 100;

            if ($(window).scrollTop() > navHeight) {
                $('.navbar').addClass('on');
            } else {
                $('.navbar').removeClass('on');
            }

        });


        /*========================================
        Date Picker
        ==================================*/

        function datepicker() {
            $('#checkin, #checkout').datepicker({
                inline: true,
                showOtherMonths: true,
                dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
              });

              $('#checkin').datepicker();
              $('#checkout').datepicker();
        }
        datepicker()
    }())
}

main()