(function(){

  $(document).ready(function() {

    $('.nav-item').click(function() {
      $(this).removeClass('animate-delay1 animate-delay2 animate-delay3 animate-delay4');
      $('.filter-buttons .nav-link').removeClass('active');
      $(this).find('.nav-link').addClass('active');
      $('.card').hide();
    });


    $('.btn-news-all').click(function() {
      $('.card').fadeIn();
    });
    $('.btn-news-media').click(function() {
      $('.card.news-type-media').fadeIn();
    });
    $('.btn-news-audio-video').click(function() {
      $('.card.news-type-audio-video').fadeIn();
    });
    $('.btn-news-press').click(function() {
      $('.card.news-type-press').fadeIn();
    });
    $('.btn-analysts').click(function() {
      $('.card.news-type-analyst').fadeIn();
    });

  });

}());
