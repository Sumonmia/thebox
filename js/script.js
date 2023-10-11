
// jquery plugins
$(document).ready(function(){
            // counter up
            $('.ex_count').counterUp({
                delay: 10,
                time: 1000
            });

            // mixit up the box
            var mixer = mixitup('.menu_img', {
                animation: {
                    duration: 300
                }
            });

            // move to top
            $('body').materialScrollTop();
})