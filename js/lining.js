(function() {

  (function($) {

    var injector = function(t, splitter, klass, after) {
      var a, inject;
      a = t.html().split(splitter);
      inject = "";
      if (a.length) {
        $(a).each(function(i, item) {
          return inject += "<span class=\"" + klass + (i + 1) + "\">" + item + "</span>" + after;
        });
        return t.empty().append(inject);
      }
    };

    var methods = {

      line: function() {
        return this.each(function() {
          var collection, counter, inject, lastY, words;
          injector($(this), " ", "word", " ");
          words = $(this).find("span[class^='word']");
          collection = [];
          lastY = 0;
          inject = "";
          counter = 1;
          words.each(function(i) {
            var y;
            y = $(this).offset().top;
            if (y !== lastY && i !== 0) {
              inject += "<span class='text-line" + counter + "'>" + (collection.join('')) + "</span>";
              collection = [];
              counter++;
            }
            collection.push($(this).html() + " ");
            if (i === words.length - 1) {
              inject += "<span class='text-line" + counter + "'>" + (collection.join('')) + "</span>";
            }
            return lastY = y;
          });
          return $(this).empty().append(inject);
        });
      },

      unline: function() {
        this.each(function() {
          var inject, lines;
          lines = $(this).find("span[class^='text-line']");
          if (lines.length) {
            inject = "";
            lines.each(function() {
              return inject += $(this).html();
            });
            return $(this).empty().append(inject);
          }
        });
        return this;
      }

    };

    return $.fn.lining = function(method) {
      if (method && methods[method]) {
        return methods[method].apply(this, [].slice.call(arguments, 1));
      } else if (method === "line" || !method) {
        return methods.line.apply(this, [].slice.call(arguments, 0));
      }
      $.error("Method " + method + " does not exist on jQuery.lining");
      return this;
    };
  })(jQuery);

  $(function() {
    $("p").lining();
    $('span[class^="text-line"]').addClass('initial-render');
    return $(window).on("resize", function() {
      return $("p").lining("unline").lining();
    });
  });

}).call(this);
