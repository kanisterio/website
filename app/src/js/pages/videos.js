(function(){

  var videoPlayer;

  var videoWhiteList = [
      'wkP4NTvTax8', // home page - demo video
      'zwAQU_iwJ-o', // product page - policy based protection
      'B3biCRNonVc', // product page - cross cluster migration
      '0FWxzCN3VRQ', // product page - protection with Kanister
      'vpKPtRjV8kQ', // CNS Day 2019 EU - Sopra Steria
      'lmaItP1hhTc', // Rancher 2019 Webinar
      'hpIVtaeGDbg', // CNS Day 2019 NA - Sopra Steria
      'dpPe2jMX52Q', // CNS Day 2019 NA - Gaurav Rishi
      'jTX4Qb7nhoM', // Guided Tour walkthrough
  ];

  /**
   * If a user is sent to the web site using a video= hash,
   * show the requested video.
   * Example: https://kasten.io#video=zwAQU_iwJ-o
   * Where 'zwAQU_iwJ-o' is the YouTube video ID.
   */
  function checkUrlForVideoHash() {
    var hash = location.hash;
    if (hash && hash.indexOf('video=') >= 0) {
      var videoId = hash.split('=')[1];
      if (videoWhiteList.indexOf(videoId) < 0) {
        console.warn('Video id is not on whitelist', videoId);
        return;
      }
      console.log('Showing video with id', videoId);
      showVideo(videoId);
    }
  }

  function showVideo(videoId) {
    videoPlayer.loadVideoById(videoId);
    videoPlayer.playVideo();
    $('.page-overlay').toggleClass('show');
    console.log("Play video")
    $('.fullscreen-centered').show();
    $('.fullscreen-centered iframe#videoPlayer').show();
  }

  function checkUrlForPdfName() {
    var hash = location.hash;
    if (hash && hash.indexOf('file=') >= 0) {
      var pdfName = hash.split('=')[1];
      console.log('Found PDF name in URL hash', pdfName);
      showPDF(pdfName);
    }
  }

  function showPDF(pdfName) {
    console.log("Showing PDF", pdfName);
    $('.page-overlay').toggleClass('show');
    $('.fullscreen-centered iframe#pdf').attr('src', '/resources/' + pdfName);
    $('.fullscreen-centered').show();
    $('.fullscreen-centered iframe#pdf').show();
  }

  function hideDisplay() {
    videoPlayer.stopVideo();
    $('.page-overlay').toggleClass('show');
    $('.fullscreen-centered').hide();
    $('.fullscreen-centered iframe').hide();
  }

  /**
   * Global context callback that will be called once the
   * YT IFrame API is loaded.
   */
  window.onYouTubeIframeAPIReady = function() {
    videoPlayer = new YT.Player('videoPlayer', {
                                  events : {
                                    'onReady': onPlayerReady
                                  }
                                });
  };

  function onPlayerReady(event) {
    /**
     * Bind here to capture the player context
     */
    $('.video-container').click(function() {
      showVideo($(this).data('video-id'));
    });

    $('.fullscreen-centered').click(function() {
      hideDisplay();
    });

    checkUrlForVideoHash();
    checkUrlForPdfName();
  }

}());
