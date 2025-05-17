$("#home").load("contents/home/home.html", function () {
    var typed = new Typed('.typed', {
        strings: ["IT Programmer", "Software Engineer", "Web Developer"],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    });
});

$("#about").load("contents/about/about.html");

$("#skill").load("contents/about/skill.html", function () {
    $('.progress-bar').each(function () {
        var valueNow = $(this).attr('aria-valuenow');
        $(this).css('width', valueNow + '%');
    });
    AOS.init();
});

$("#resume").load("contents/resume/resume.html");

$("#portfolio").load("contents/portfolio/portfolio.html", function () {
    var $grid = $('.isotope-container').isotope({
        itemSelector: '.isotope-item',
        layoutMode: 'masonry',
        filter: '*'
    });

    $('.isotope-filters').on('click', 'li', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
        $('.isotope-filters li').removeClass('filter-active');
        $(this).addClass('filter-active');
    });

    const lightbox = GLightbox({
        selector: '.glightbox'
    });

});

$("#badge").load("contents/portfolio/badge.html");

$("#contact").load("contents/contact/contact.html");