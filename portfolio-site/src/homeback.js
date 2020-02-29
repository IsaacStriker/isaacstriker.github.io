$(window).scroll(function () {
    if ($(this).scrollTop() > 28) {
        $("#p1").fadeIn("slow", function () {});
    } else {
        $("#p1").fadeOut("slow", function () {});
    }
});