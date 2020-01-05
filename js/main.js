"use strict";

var xx = xx || {};

xx.main = function () {
  $(".banner").ready(function () {
    $("#aimgright").addClass("move-in-left");
    $("#aimgleft").addClass("move-in-right");
    $("#aimgleft").one('webkitAnimationEnd', function () {
      $(".text1").addClass("fadeIn");
      $(".text2").addClass("fadeIn");
      $(".title1").addClass("moveIn");
      setTimeout(function () {
        $(".title2").addClass("moveIn");
      }, 300);
    });
  });
  xx.index = 1;
  setInterval(function () {
    xx.index++;
    var n = xx.index % 3;

    if (n === 0) {
      n = 3;
    }

    var src = "img/1-1-" + n + ".png";
    $("#aimgright").attr("src", src);
  }, 1000); //延迟加载图片

  var imgLoader2 = new xx.ImgLoader();
  imgLoader2.basePath = xx.cdn;
  imgLoader2.loadType = ['_src0'];
  imgLoader2.load();
  /**
   * 防抖节流
   * @param {*} action 回调
   * @param {*} delay 等待的时间
   * @param {*} context this指针
   * @param {Boolean} iselapsed 是否等待上一次
   * @returns {Function}
   */

  function throttle(action, delay, context, iselapsed) {
    var timeout = null;
    var lastRun = 0;
    return function () {
      if (timeout) {
        if (iselapsed) {
          return;
        } else {
          clearTimeout(timeout);
          timeout = null;
        }
      }

      var elapsed = Date.now() - lastRun;
      var args = arguments;

      if (iselapsed && elapsed >= delay) {
        runCallback();
      } else {
        timeout = setTimeout(runCallback, delay);
      }
      /**
       * 执行回调
       */


      function runCallback() {
        lastRun = Date.now();
        timeout = false;
        action.apply(context, args);
      }
    };
  }

  function isInView(el) {
    // viewPortHeight 兼容所有浏览器写法
    var viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    var top = el.getBoundingClientRect() && el.getBoundingClientRect().top;
    var offsetBottom = el.getBoundingClientRect() && el.getBoundingClientRect().bottom;
    var offsetHeight = el.offsetHeight; // 这里有个+100是为了提前加载+ 100
    //  console.log('top',top)
    //  console.log('viewPortHeight',viewPortHeight)
    //  console.log('offsetHeight',offsetHeight)
    //  console.log('offsetBottom',offsetBottom)

    if (top <= viewPortHeight + 50 && offsetBottom >= 0) {
      return true;
    } else if (top + offsetHeight <= viewPortHeight + 50) {
      console.log();
      return false;
    } // return top <= viewPortHeight + 50

  }

  $(window).scroll(throttle(function (event) {
    var oTop = document.body.scrollTop == 0 ? document.documentElement.scrollTop : document.body.scrollTop; // console.log(oTop)
    // if (isInView ($(".imgboxt")[0])) {
    //   $(".imgboxt").addClass("moveIn")
    // }

    if (isInView($(".sec12-top-img")[0])) {
      $(".mimgl").addClass("move-in-left");
      $(".mimgr").addClass("move-in-right");
    }

    if (isInView($("#moveimg")[0])) {
      $("#moveimg").addClass("movestare").show();
      $("#moveimg").removeClass("moveend");
    } else {
      $("#moveimg").addClass("moveend").show();
      $("#moveimg").removeClass("movestare");
    }

    var video1 = document.getElementById("video1");
    var video2 = document.getElementById("video2");
    var video3 = document.getElementById("video3");
    var video4 = document.getElementById("video4");
    var video5 = document.getElementById("video5");
    var video6 = document.getElementById("video6"); //let video7 = document.getElementById("video7")

    if (isInView($(".sec2-video")[0])) {
      video1.play();
    } else {
      video1.pause();
    }

    if (isInView($(".sec3-video")[0])) {
      video2.play();
    } else {
      video2.pause();
    }

    if (isInView($(".sec4-video")[0])) {
      video3.play();
    } else {
      video3.pause();
    }

    if (isInView($(".sec5-video")[0])) {
      video4.play();
    } else {
      video4.pause();
    }

    if (isInView($(".sec7-video")[0])) {
      video5.play();
      video6.play();
    } else {
      video5.pause();
      video6.pause();
    }
    /*   if (oTop>=7600&&oTop<=8000) {
          video7.play();
      }else{ video7.pause();} */

  }, 300, this, true));
  $("#aTag3").click(function (x) {
    x.preventDefault();
    var element = document.getElementById("herf3");
    var top = element.offsetTop - 100;
    window.scrollTo(0, top);
  });
};