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

         /*====================================
        Change color of clicked a-tag
        ======================================*/
        $('#nav--items a').click(function () {
            $('#nav--items   a.active').removeClass('active');
            $(this).addClass('active');
        });



           /*====================================
        Hide Header Nav Items on scroll
        ======================================*/
        $(window).scroll(function() {
            if ($('#nav--items').css('display') == 'block') {
            $('#nav--items').removeClass('collapse, in')
            $('.navbar').removeClass('nav-background')
            }
        
        })

        function changeColorOnScroll() {
            var lastId;
            var topMenu = $("#nav--items");
            var topMenuHeight = topMenu.outerHeight() + 15;
            var menuItems = topMenu.find("a");
            var scrollItems = menuItems.map(function() {
                var item = $($(this).attr("href"));
                if (item.length) {return item};
            });
            
            // Bind to scroll
            $(window).scroll(function() {
                var topMostPosition = topMenu.offset().top - 15;
                var fromTop = $(this).scrollTop() + topMenuHeight;
                var current = scrollItems.map(function() {
                if ($(this).offset().top < fromTop) {return this};
                });
                current = current[current.length - 1];
                var id = current && current.length ? current[0].id : "";
                // if (topMostPosition < topMenuHeight) {
                //     menuItems.removeClass("active").filter("[href='#at-home']").addClass("first");
                // }
                
                if (lastId !== id) {
                lastId = id;
                menuItems.removeClass("active").filter("[href='#"+id+"']").addClass("active");
                }
            })
       }
       changeColorOnScroll()


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