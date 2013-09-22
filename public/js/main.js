(function() {
  console.log("hello from a require'd coffee file (via assets/js/_helper.coffee)");

}).call(this);

(function() {
  require.config({
    paths: {
      jquery: '//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.0/jquery.min'
    }
  });

  require(['jquery'], function($) {
    console.log('jquery loaded (via assets/js/main.coffee)');
    return $(function() {
      var url, urlRegExp;
      url = window.location.pathname;
      console.log(url);
      urlRegExp = new RegExp(url.replace(/\/$/, "") + "$");
      return $(".nav a").each(function() {
        if (urlRegExp.test(this.href.replace(/\/$/, "")) && url !== '/') {
          return $(this).addClass("active");
        }
      });
    });
  });

}).call(this);
