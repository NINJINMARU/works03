$(function () {
    // smooth scroll
    $('a[href^="#"]').click(function () {
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({ scrollTop: position }, speed, "swing");
        return false;
    });

    // animation
    $('.service, .works, .profile, .recruit, .contact').css('visibility', 'hidden');
    $(window).scroll(function () {
        var windowHeight = $(window).height(),
            topWindow = $(window).scrollTop();
        $('.service, .works, .profile, .recruit, .contact').each(function () {
            var targetPosition = $(this).offset().top;
            if (topWindow > targetPosition - windowHeight + 200) {
                $(this).addClass("fadeInDown");
            }
        });
    });
    $('.image1, .image2, .image3, .image4, .image5, .image6').css('visibility', 'hidden');
    $(window).scroll(function () {
        var windowHeight = $(window).height(),
            topWindow = $(window).scrollTop();
        $('.image1, .image2, .image3, .image4, .image5, .image6').each(function () {
            var targetPosition = $(this).offset().top;
            if (topWindow > targetPosition - windowHeight + 240) {
                $(this).addClass("fadeInDown");
            }
        });
    });
    $('.footer, .to-top').css('visibility', 'hidden');
    $(window).scroll(function () {
        var windowHeight = $(window).height(),
            topWindow = $(window).scrollTop();
        $('.footer, .to-top').each(function () {
            var targetPosition = $(this).offset().top;
            if (topWindow > targetPosition - windowHeight + 16) {
                $(this).addClass("fadeInDown");
            }
        });
    });

    // navbar


    //   $('.navbar-shrink').click(function(){
    //   if ($('.navbar-item-shrink').css('display') == 'block') {
    //     //open-bodyが表示中の場合
    //               $('.navbar-item-shrink').fadeOut();
    //             }
            // });

    // modal
    $('.image1').click(function () {
        $('.modal-wrapper4').fadeIn();
        $('modal1').fadeIn();
        $('body').css('overflow-y', 'hidden');
        $('.modal-wrapper1').css({ 'display': 'flex', 'justify-content': 'center', 'align-items': 'center' });
    });
    $('.image2').click(function () {
        $('.modal-wrapper2').fadeIn();
        $('modal2').fadeIn();
        $('body').css('overflow-y', 'hidden');
        $('.modal-wrapper2').css({ 'display': 'flex', 'justify-content': 'center', 'align-items': 'center' });
    });
    $('.image3').click(function () {
        $('.modal-wrapper3').fadeIn();
        $('modal3').fadeIn();
        $('body').css('overflow-y', 'hidden');
        $('.modal-wrapper3').css({ 'display': 'flex', 'justify-content': 'center', 'align-items': 'center' });
    });
    $('.close-modal').click(function () {
        $('.modal-wrapper1,.modal-wrapper2,.modal-wrapper3,.modal-wrapper4,.modal-wrapper5,.modal-wrapper6').fadeOut();
        $('body').css('overflow-y', 'unset');
    });
})
