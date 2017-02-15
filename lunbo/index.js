/**
 * 
 * @authors ${huangketong}
 * @date    2016-09-12
 * @version $Id$
 */
$(function() {
    var imgSrc = ["image/banner_01.jpg", "image/113.jpg", "image/banner_03.jpg", "image/banner_04.jpg"]; //要播放的图片
    var timeInterval = 3000; // 轮播的时间间隔
    var curIndex = 0; //正在播放的图片的角标
    var img = $('.p-img');
    var timer;
    img.attr("src", imgSrc[curIndex]); //初始化第一张图片

    createList();
    autoPlay();

    $('.js-right').click(function() {
        stop();
        changeImg();
        autoPlay();
    });
    $('.js-left').click(function() {
        stop();
        changeImgLeft();
        autoPlay();
    });
    // 点击底部原点
    $('.p-list ul li').click(function() {
        stop();
        var id = $(this).attr('class').slice(2);
        $(this).addClass('active').siblings('.active').removeClass('active');
        img.attr('src', imgSrc[id]);
        autoPlay();
    });

    function autoPlay() {
        timer = setInterval(changeImg, timeInterval);
    }

    function stop() {
        clearInterval(timer);
    }

    function changeImg() { //向右播放
        curIndex === imgSrc.length - 1 ? curIndex = 0 : curIndex++;
        img.fadeOut(300, function() {
            img.attr("src", imgSrc[curIndex]);
            img.fadeIn(300);
        });
        $('.id' + curIndex).addClass('active').siblings('.active').removeClass('active');
    }

    function changeImgLeft() { //向左播放
        curIndex === 0 ? curIndex = imgSrc.length - 1 : curIndex--;
        img.fadeOut(300, function() {
            img.attr("src", imgSrc[curIndex]);
            img.fadeIn(300);
        });
        $('.id' + curIndex).addClass('active').siblings('.active').removeClass('active');
    }

    function createList() { // 生成底部原点列表
        var ul = $('.p-list ul');
        var L = imgSrc.length;
        for (var i = 0, str = ""; i < L; i++) {
            str += "<li class=id" + i + "><b></b></li>";
        }
        ul.append(str);
        $('.p-list ul li:first-child').addClass('active');
    }

});