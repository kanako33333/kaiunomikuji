"use strict";

// おみくじネズミをクリックした時
$(".omikuji-img").click(function(){
    // おみくじをふる
    $(".omikuji-img").animate({bottom:"80px"},150); //0.15秒で80pxの位置に移動
    $(".omikuji-img").animate({bottom:"0px"},150); //0.15秒で0pxの位置に移動
    // フリフリを追加
    $(".omikuji-text").append("<h3>フリフリするでちゅ〜</h3>");
});

// おみくじネズミをクリックした時、ネズミが光る
$(".omikuji-img").click(function(){
        $(".omikuji-img").attr("src" , "img/mouse2.png");
    });




// 2秒ごとにタイトルの色を切り替える
$(function(){
    setInterval(function(){
        $(".ttl").toggleClass("color");
    },2000);
});

// おみくじ結果表示
var omikuji = parseInt(Math.random() * 100); 1;

if(omikuji < 10){
    $(".result-img").eq(0).addClass("is-active");
    $(".kanpai").addClass("is-active");
    var duration = 15 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
    
    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }
    
    var interval = setInterval(function() {
    var timeLeft = animationEnd - Date.now();
    
    if (timeLeft <= 0) {
        return clearInterval(interval);
    }
    
      var particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
    confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
    confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
} else if(omikuji < 35){
    $(".result-img").eq(1).addClass("is-active");
    $(".smile").addClass("is-active");
} else if(omikuji < 55){
    $(".result-img").eq(2).addClass("is-active");
    $(".smile").addClass("is-active");
} else if (omikuji < 75){
    $(".result-img").eq(3).addClass("is-active");
    $(".woman").addClass("is-active");
    $(".result-body").addClass("lightgray");
} else if(omikuji < 90){
    $(".result-img").eq(4).addClass("is-active");
    $(".woman").addClass("is-active");
    $(".result-body").addClass("lightgray");
} else if(omikuji <98){
    $(".result-img").eq(5).addClass("is-active");
    $(".byebye").addClass("is-active");
    $(".result-body").addClass("gray");
} else{
    $(".result-img").eq(6).addClass("is-active");
    $(".byebye").addClass("is-active");
    $(".result-body").addClass("gray");
}

