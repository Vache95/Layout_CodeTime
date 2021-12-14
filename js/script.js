"use strict";

$(function(){
    $(window).on('scroll',function(){
        if($(window).scrollTop() > 0){
            $('.header').addClass('transfor')
        }else if ($(window).scrollTop() == 0){
            $('.header').removeClass('transfor')
        }
    })
})

$(document).ready(function(){
    $('.slidertop').slick({
 infinite: true,
 speed: 300,
 slidesToShow: 1,
 centerMode: true,
 variableWidth: true,
 speed:1000,
 autoplay: true,
 autoplaySpeed: 2000,
    })
})

$(document).ready(function(){
    $('.sliderone').slick({
 infinite: true,
 speed: 300,
 slidesToShow: 1,
 centerMode: true,
 variableWidth: true,
 speed:1000,
    })
})

$(document).ready(function(){
    $('.slidertwo').slick({
 infinite: true,
 speed: 300,
 slidesToShow: 1,
 centerMode: true,
 variableWidth: true,
 speed:1000,
    })
})

$(document).ready(function(){
    $('.sliderfor').slick({
 infinite: true,
 speed: 300,
 slidesToShow: 1,
 centerMode: true,
 variableWidth: true,
 speed:1000,
    })
})