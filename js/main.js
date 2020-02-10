/*
let line = 'The quick brown fox jumps over the lazy dog.';
let words = line.split(' ');
let chars = line.split('');

console.log(line);
console.log(words);
console.log(chars);
*/



/*
let text = document.querySelector('p').textContent;
let words = text.split(' ');
let chars = text.split('');

for (let i=0; i<words.length; i++) {
  console.log('<span>' + words[i] + '</span>');
}
*/

/*
function printLine() {
  const words = $('p').text().split(' ');
  let span = '';
  if (words.length) {
    $(words).each(function (index, element) {
      span += `<span class="word-line">${element}</span>`;
    });
  }
}
*/

/*
function printWordsSpan () {
  const itemsArray = $('.title-words').text().split(' ');
  let span = '';
  if (itemsArray.length) {
    $(itemsArray).each(function(index, element){
      span += `<span class="word-${(index + 1)}">${element}</span> `;
      $('.title-words').empty().append(span);
    });
  }
}
printWordsSpan();

function printCharsSpan () {
  const itemsArray = $('.title-chars').text().split('');
  let span = '';
  if (itemsArray.length) {
    $(itemsArray).each(function(index, element){
      span += `<span class="char-${(index + 1)}">${element}</span>`;
      $('.title-chars').empty().append(span);
    });
  }
}
printCharsSpan();
*/



/*
function printSpan(text, splitItem, spanClass, after) {
  const itemsArray = text.text().split(splitItem);
  let span = '';
  if (itemsArray.length) {
    $(itemsArray).each(function(index, element){
      span += `<span class="${spanClass}">${element}</span>${after}`;
    });
    text.empty().append(span);
  }
}
printSpan($('h1'), ' ', 'words', ' ');
printSpan($('h3'), '', 'char', '');
*/



(function ($) {

  function printSpan( text, splitter, className, space ) {
    var splittedText = text.text().split(splitter);
    var html = '';
    if (splittedText.length) {
      $(splittedText).each(function (index, element) {
        html += '<span class="' + className + '">' + element + '</span>' + space;
      });
    }
    return html;
  }

/*
  function printLine(text, spanClass, after) {
    printSpan($(this), ' ', 'word', ' ');

    const wordsArray = text.text().split(' ');
    let span = '';
    if (wordsArray.length) {
      $(wordsArray).each(function (index) {
        span += `<span class="text-line">${element}</span>${after}`;
      });
      text.empty().append(inject);
    }
  };
*/

  var methods = {

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

        var itemsClassWord = document.querySelectorAll('span.word');
        var top = 0;
        var arr = [];
        var html = '';

        $(itemsClassWord).each(function (index) {
          var y = $(this).offset().top;
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
