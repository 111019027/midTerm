
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
    if (y > 200 ) {
        $('.asideArt').fadeIn();
    } else {
        $('.asideArt').fadeOut();
    }

    if (y > 250) {
        $('.asideTextArea').fadeIn();
    } else {
        $('.asideTextArea').fadeOut();
    }
});

$(".asideArt").click(function(){
    $(".asideArt").css('red');
});
$("#signIn").click(function(){
    $("#form2").css('display','block');
    $("#form1").css('display','none');
});
$("#signUp").click(function(){
    $("#form1").css('display','block');
    $("#form2").css('display','none');
});