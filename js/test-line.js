function printWordsSpan () {
  const words = document.querySelector('p').textContent.split(' ');
  let span = '';
  if (words.length) {
    $(words).each(function(index, element){
      span += `<span class="text-word">${element}</span> `;
    });
    $('p').empty().append(span);
  }
}
printWordsSpan();

function printLineSpan() {
  const wordsSpan = document.querySelectorAll('p span');
  let collection = [];
  let lastY = 0;
  let span = '';
  let counter = 1;
  $(wordsSpan).each(function (index) {
    const y = $(this).offset().top;
    if (y !== lastY && index !== 0) {
      span += `<span class="text-line-${counter}">${collection.join('')}</span>`;
      collection = [];
      counter++;
    }
    collection.push($(this).html() + " ");
    if (index === wordsSpan.length - 1) {
      span += `<span class="text-line-${counter}">${collection.join('')}</span>`;
    }
    return lastY = y;
  });
  $('p').empty().append(span);
}
printLineSpan();


function resizeLine() {
  const lineSpan = document.querySelectorAll('p span');
  let span = '';
  if (lineSpan.length) {
    $(lineSpan).each(function () {
      span += $(this).html();
    });
    $('p').empty().append(span);
  }
  return this;
}
