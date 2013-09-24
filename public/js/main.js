(function() {


}).call(this);

(function() {
  require.config({
    paths: {
      jquery: '//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.0/jquery.min'
    }
  });

  require(['jquery'], function($) {
    return $(function() {
      var url, urlRegExp;
      url = window.location.pathname;
      urlRegExp = new RegExp(url.replace(/\/$/, "") + "$");
      return $(".nav a").each(function() {
        if (urlRegExp.test(this.href.replace(/\/$/, "")) && url !== '/') {
          return $(this).addClass("active");
        }
      });
    });
  });

}).call(this);
