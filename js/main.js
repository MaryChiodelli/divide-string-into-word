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

  function printTextSpanned (text, splitItem, spanClass, after) {
    const itemsArray = text.text().split(splitItem);
    let span = '';
    if (itemsArray.length) {
      $(itemsArray).each(function(index, element){
        span += `<span class="text-${spanClass}">${element}</span>${after}`;
      });
      text.empty().append(span);
    }
  };

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

  const methods = {
    line: function () {

    },

    words: function () {
      return this.each(function () {
        printTextSpanned($(this), ' ', 'word', ' ');
      })
    },
    chars: function () {
      return this.each(function () {
        printTextSpanned($(this), '', 'char', '');
      })
    }

  };

  $.fn.splitting = function (method) {
    if (method && methods[method]) {
      return methods[method].apply(this, [].slice.call(arguments, 1));
    } else if (method === 'split' || !method) {
      return methods.words.apply(this, [].slice.call(arguments, 0));
    }
    $.error(`Method ${method} does not exist on jQuery.splitting`);
    return this;
  }

})(jQuery);
