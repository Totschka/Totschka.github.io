window.Zepto = Zepto, void 0 === window.$ && (window.$ = Zepto),
    function(t, e, n) {
        t("a#sideSlide").click(function() {
            t("#sidebar,a#slide,#fade").addClass("slide"), t("#open").hide(), t("#search").hide(), t("#close").show()
        });
    }(Zepto, window);