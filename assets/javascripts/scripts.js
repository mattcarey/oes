$(document).ready(function() {
  var mobile_nav = $('.mobile-nav');
  mobile_nav.html(mobile_nav.html().slice(4, -3));

  $('.mobile-nav .list').hide();

  $('.mobile-nav .toggle').on('click', function(){
    $('.mobile-nav .list').toggle();
  });

  $('a').each(function(){
    var a = $(this),
        href = a.attr('href'),
        regex = new RegExp(location.host, 'i');

    if (href.match(/^\//) || href.match(location.host)) {
      // Do nothing
    } else {
      a.attr('target', '_blank');
    }
  });
});
