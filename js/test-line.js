function printTextSpanned (text, splitItem, spanClass, after) {
  const itemsArray = text.text().split(splitItem);
  let span = '';
  if (itemsArray.length) {
    $(itemsArray).each(function(index, element){
      span += `<span class="${spanClass}">${element}</span>${after}`;
    });
    text.empty().append(span);
  }
}
printTextSpanned($('p'), ' ', 'word', ' ');


function printLineSpan() {
  const words = $('p').find('span[class^="word"]');
  words.each(function (index) {
    const y = $(this).offset().top;
    
  });

}
printLineSpan();
