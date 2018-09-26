<!DOCTYPE html>
<#include "../include/imports.ftl">
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Sample React App showcasing BloomReach Experience integration">

    <title>React App</title>

    <link rel="stylesheet" href="<@hst.link path="/static/spa/css/bootstrap.css"/>" media="screen">
    <link rel="stylesheet" href="<@hst.link path="/static/spa/css/carousel.css"/>" media="screen">
    <link rel="stylesheet" href="<@hst.link path="/static/spa/css/custom.css"/>" media="screen">

    <link rel="shortcut icon" href="<@hst.link path="/static/spa/favicon.ico"/>">
  </head>
  <body>
    <noscript>
      You need to enable JavaScript to run this app.
    </noscript>
    <div class="marketing" id="root">
    </div>
    <footer>
      <p>&copy; 2018 BloomReach, Inc.</p>
    </footer>
    <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
    <script>window.jQuery || document.write('<script src="<@hst.link path="/js/jquery-2.1.0.min.js"/>"><\/script>')</script>
    <script src="<@hst.link path="/static/spa/js/popper.min.js"/>"></script>
    <script src="<@hst.link path="/js/bootstrap.min.js"/>"></script>
    <script>
      var loadSpaBundles = function() {
        // load React app from local Node server or static bundle js resource.
        $.getScript( "http://localhost:3000/static/js/bundle.js" )
          .fail(function() {
            // fallback to bundled React app in static resource
            $.getScript( "<@hst.link path="/js/react-example-app.js"/>" );
          });
      };

      window.SPA = {
        cmsRequest: ${hstRequestContext.cmsRequest?then('true','false')},
        init: function(cms) {
          window.SPA.cms = cms;
          window.setTimeout('loadSpaBundles();', 10);
        }
      };

      if (!window.SPA.cmsRequest) {
        loadSpaBundles();
      }
    </script>
  </body>
</html>
