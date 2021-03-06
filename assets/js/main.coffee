#= require "_helper"

# requirejs makes life a lot easier when dealing with more than one
# javascript file and any sort of dependencies, and loads faster.

# for more info on require config, see http://requirejs.org/docs/api.html#config
require.config
  paths:
    jquery: '//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.0/jquery.min'

require ['jquery'], ($) ->

  $ ->
    url = window.location.pathname
    urlRegExp = new RegExp(url.replace(/\/$/, "") + "$")
    $(".nav a").each ->
      $(@).addClass "active" if (urlRegExp.test(@href.replace(/\/$/, "")) && url != '/')
