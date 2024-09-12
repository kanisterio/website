(function(){
  $(document).ready(function() {
    $('.data-platform-pg .provider').mouseenter(function() {
      var providerType = $(this).data('provider');

      $('.data-platform-pg .bullet-points').hide();
      $('.data-platform-pg .bullet-points.' + providerType).fadeIn();

      $('.data-platform-pg .provider').removeClass('active');
      $(this).addClass('active');
    });
  });
}());
