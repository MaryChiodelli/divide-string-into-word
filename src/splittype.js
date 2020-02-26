(function ($) {

  function printSpan( text, splitter, className, space ) {
    const splittedText = text.text().split(splitter);
    let html = '';
    if (splittedText.length) {
      $(splittedText).each(function (index, element) {
        html += '<span class="' + className + '">' + element + '</span>' + space;
      });
    }
    return html;
  }

  const methods = {

    chars: function () {
      return this.each(function () {
        $(this).html( printSpan( $(this), '', 'char', '' ) );
      });
    },
    words: function () {
      return this.each(function () {
        $(this).html( printSpan( $(this), ' ', 'word', ' ' ) );
      });
    },
    lines: function () {
      return this.each(function () {
        $(this).html( printSpan( $(this), ' ', 'word', ' ' ) );

        const itemsClassWord = document.querySelectorAll('span.word');
        let top = 0;
        let arr = [];
        let html = '';

        $(itemsClassWord).each(function (index) {
          const y = $(this).offset().top;
          if (y !== top && index !== 0) {
            html += '<span class="line">' + arr.join('') + '</span>';
            arr = [];
          }
          arr.push( $(this).html() + ' ' );
          if (index === itemsClassWord.length - 1) {
            html += '<span class="line">' + arr.join('') + '</span>';
          }
          return top = y;
        });
        $(this).html(html)
      });
    }

  }

  $.fn.splittype = function (options) {
    if ( methods[options] ) {
      return methods[options].apply(this, [].slice.call(arguments, 1));
    } else {
      $.error( 'Method ' +  options + ' does not exist on jannounce' );
    }
  }

})(jQuery);
