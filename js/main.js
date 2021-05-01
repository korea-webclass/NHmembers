$(function(){
    $(".gnb-lnb").hide();
    $(".gnb > .gnb-list").hover(function () {
        $("ul:not(:animated)",this).slideDown("fast");
    },
    function () {
        $("ul",this).slideUp("fast");
    });

    showContents();

    function showContents() {
        var scrollTop = 0;
        var offsetTop = 0;  //document all
        var startEffect = 0;  //event start
        var endEffect = 0;
  
        checkScroll();
        $(window).on('scroll resize', function() {
            checkScroll();
        });
      
        function checkScroll() {
            scrollTop = $(document).scrollTop();
            $('.motion').each(function() {  //each
                offsetTop = $(this).offset().top;
                startEffect = offsetTop - $(window).height();   //event start = offset - window height
                endEffect = offsetTop + $(this).outerHeight();  //event end = document height + this outer height
                if (scrollTop > startEffect && scrollTop < endEffect) {
                    $(this).addClass('on');
                } else {
                    $(this).removeClass('on');
                }
            });
        }
    }
});