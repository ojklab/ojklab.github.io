

//タブ切り替え

$(function(){
  $('.js-tab-link').click(function () {
      $('.js-tab-box').hide().filter(this.hash).fadeIn();
      $('.js-tab-link').removeClass('selected');
      $(this).addClass('selected');
      return false;
  }).filter(':eq(0)').click();
});


//フェードイン

$(function(){
  　$(window).scroll(function (){
      $('.effect-fade').each(function(){
          var elemPos = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight){
              $(this).addClass('effect-scroll');
          }
      });

      var pos = $('main').offset();          /* mvを過ぎたmainタグの高さを取得して変数[pos]に格納 */
      if ($(this).scrollTop() > pos.top) {   /* 変数[pos]より、スクロールされていたら */
        $('header').fadeIn();                /* ヘッダーをふわっと表示 */
      } else {                               /* それ以外の場合 */
        $('header').fadeOut();               /* ヘッダーをふわっと非表示 */
      }



  　});


  });
  

  

  



  $(".openbtn1").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
      $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
  });
  
  $("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
      $(".openbtn1").removeClass('active');//ボタンの activeクラスを除去し
      $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
  });