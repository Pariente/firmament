$(document).ready(function() {

  $('.apple').click(function(){
    mixpanel.track("AppStore click");
  });

  $('.google').click(function(){
    mixpanel.track("PlayStore click");
  });
});

