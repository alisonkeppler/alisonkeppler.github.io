$('a.taphover').on("touchstart", function (e) {
    "use strict"; //satisfy the code inspectors
    var link = $(this); //preselect the link
    if (link.hasClass('portfolio-hover')) {
        return true;
    } else {
        link.addClass("portfolio-hover");
        $('a.taphover').not(this).removeClass("portfolio-hover");
        alert("preventDefault");
        e.preventDefault();
        return false; //extra, and to make sure the function has consistent return points
    }
});