window.Zepto = Zepto, void 0 === window.$ && (window.$ = Zepto),
    function(t, e, n) {
        t("a#sideSlide").click(function() {
            t("#sidebar,a#sideSlide,#fade").addClass("slide"), t(".open").hide(), t("#search").hide(), t(".close").show()
        });
    }(Zepto, window);
$(window).scroll(function() {
    var $btn = $("#sideSlide");
    console.log($(this).scrollTop());
    if($(this).scrollTop() >= 400) $btn.addClass('show');
    else $btn.removeClass('show');
})