jQuery(document).ready(function ($) {

  var visitor_clicked_ios = false;
  var visitor_clicked_android = false;

  $('.apple').click(function(){
    if (visitor_clicked_ios == false) {
      mixpanel.track("AppStore click");
      visitor_clicked_ios = true;
    }
  });

  $('.google').click(function(){
    if (visitor_clicked_android == false) {
      mixpanel.track("PlayStore click");
      visitor_clicked_android = true;
    }
  });
});