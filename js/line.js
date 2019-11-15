/*
line: function () {
  return this.each(function () {
    printSpan($(this), ' ', 'word', ' ');
    let words = $(ths).find(`span[class^='word']`);
    let collection = [];
    let lastY = 0;
    let span = '';
    let counter = 1;
    words.each(function (i) {
      let y = $(this).offset().top;
      if (y !== lastY && i !== 0) {
        span += `<span class="text-line${counter}">${collection}.join('')</span>`;
        collection = [];
        counter++;
      }
      collection.push($(this).html() + ' ');
      if (i === words.length - 1) {
        span += `<span class="text-line${counter}">${collection}.join('')</span>`;
      }
      return lastY = y;
    });
    return $(this).empty().append(span);
  });
}
*/


/*
(function ($) {

  var printSpan = function (text, splitItem, spanClass, after) {
    const itemsArray = text.text().split(splitItem);
    let span = '';
    if (itemsArray.length) {
      $(itemsArray).each(function(index, element){
        return span += `<span class="text-${spanClass}">${element}</span>${after}`;
      });
      return text.empty().append(span);
    }
  };

  var methods = {
    line: function () {
      return this.each(function () {

      })
    }

  };

})(jQuery);
*/
