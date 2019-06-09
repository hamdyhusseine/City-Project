$('.test,.navbar .nav-link, .navbar-brand,header .btn, .new-button').click(function() {
    var sectionTo = $(this).attr('href');
    $('html, body').animate({
    scrollTop: $(sectionTo).offset().top
    }, 1500);
});

$(document).ready(function(){
    $("#loading-screen").fadeOut(1000) 
    })
    
$("#__chn").click(function () {
    if($(".jax2").is(":visible")){
        var r__o_t = 50;
        var n_r_ot = -50;
        var nru_ = 360;
        var n = 0;
        $(".jax2").css({"display":"none"})
        //$(".jax1").css({"transform":"translate(20%)"})
        $(".jax1").css({"transform":'rotate('+ r__o_t +'deg)'})
        $(".jax3").css({"transform":'rotate('+ n_r_ot +'deg)'})

    } else {
        $(".jax2").css({"display":'block'})
        $(".jax1").css({"transform":'rotate(0)'})
        $(".jax3").css({"transform":'rotate(0)'})
        $("#__chn").css({"transform":'rotate('+ nru_ +'deg)'})
    }
});
//--
var track = document.getElementById('track');

var controlBtn = document.getElementById('play-pause');

function playPause() {
    if (track.paused) {
        track.play();
        //controlBtn.textContent = "Pause";
        controlBtn.className = "pause";
    } else { 
        track.pause();
        //controlBtn.textContent = "Play";
        controlBtn.className = "play";
    }
}

controlBtn.addEventListener("click", playPause);
track.addEventListener("ended", function() {
controlBtn.className = "play";
});
// -----
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        
        $('#return-to-top').fadeIn(200);    
    } else {
        $('#return-to-top').fadeOut(200);   
    }
});
$('#return-to-top').click(function() {     
    $('body,html').animate({
        scrollTop : 0                   
    }, 500);
});
// ----
//== part 1 == for up and down navbar ==
$(document).ready(function () {
  
    'use strict';
      
    var c, currentScrollTop = 0,
        navbar = $('.header nav');
    
    $(window).scroll(function () {
        var a = $(window).scrollTop();
        var b = navbar.height();
         
        currentScrollTop = a;
         
        if (c < currentScrollTop && a > b + b) {
            navbar.addClass("scrollUp");
        } else if (c > currentScrollTop && !(a <= b)) {
            navbar.removeClass("scrollUp");
        }
        c = currentScrollTop;
    });
      
    });
    // == part 2 == for change navbar colors ==
    function checkScroll(){
        var startY = $('.navbar').height() * 2;
    
        if($(window).scrollTop() > startY){
                $(".navbar").css("background", "#fff");
                $(".navbar").css("box-shadow", "1px 1px 1px");
                $(".navbar-nav .nav-link").css("color", "#000");
                $(".navbar-brand").css("color", "#000");
        }else{
            $('.navbar').css("background", "rgba(0,0,0,0.0)");
            $(".navbar").css("box-shadow", "0px 0px 0px");
            $(".navbar-nav .nav-link").css("color", "#fff");
            $(".navbar-brand").css("color", "#fff");
        }
    }
    if($('.navbar').length > 0){
        $(window).on("scroll load resize", function(){
            checkScroll();
        });
    }