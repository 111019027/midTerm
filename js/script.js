$(".dropMenuBtn").click(function(){
    $(".panel").slideToggle();
});

$(document).scroll(function () {
    let y = $(this).scrollTop();
    if (y > 200) {
        $('.goTopBtn').fadeIn();
    } else {
        $('.goTopBtn').fadeOut();
    }
});

$(document).scroll(function () {
    let y = $(this).scrollTop();
    if (y > 250 ) {
        $('.asideArtA').fadeIn();
        $('.asideArtB').fadeIn();
    } else {
        $('.asideArtA').fadeOut();
        $('.asideArtB').fadeOut();
    }

    if (y > 250) {
        $('.asideTextAreaA').fadeIn();
    } else {
        $('.asideTextAreaA').fadeOut();
    }

    if (y > 350) {
        $('.asideTextAreaB').fadeIn();
    } else {
        $('.asideTextAreaB').fadeOut();
    }
});

$(".asideArtA").mouseenter(function(){
    $(".asideArtA").toggleClass('scaleUp');
})

$(".asideArtA").mouseout(function(){
    $(".asideArtA").toggleClass('scaleDown');
})

$(".asideArtB").mouseenter(function(){
    $(".asideArtB").toggleClass('scaleUp');
})

$(".asideArtB").mouseout(function(){
    $(".asideArtB").toggleClass('scaleDown');
})
