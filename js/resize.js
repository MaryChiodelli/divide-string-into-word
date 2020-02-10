(function ($) {

  $.fn.fluidtype = function (options) {

    var settings = $.extend({
        minFS: 24,
        maxFS: 54,
        minLH: 1.0,
        maxLH: 1.2,
        minVW: 320,
        maxVW: 1020,
      }, options);

    function widthPerc() {
      var windowVW = $(window).width();
      var widthPerc = parseInt((windowVW - settings.minVW) / (settings.maxVW - settings.minVW) * 100, 10);
      return widthPerc;
    }

    var windowWidth = widthPerc();
    var fontSize = settings.minFS + (settings.maxFS - settings.minFS) * windowWidth / 100;
    var lineHeight = settings.maxLH - (settings.maxLH - settings.minLH) * windowWidth / 100;

    if (windowWidth <= 0 || fontSize < settings.minFS) {
      fontSize = settings.minFS;
    } else if (windowWidth >= 100 || fontSize > settings.maxFS) {
      fontSize = settings.maxFS;
    } else {
      fontSize = fontSize;
    }

    if (windowWidth <= 0 || lineHeight > settings.maxLH) {
      lineHeight = settings.maxLH;
    } else if (windowWidth >= 100 || lineHeight < settings.minLH) {
      lineHeight = settings.minLH;
    } else {
      lineHeight = lineHeight;
    }

    return this.each(function () {
      $(this).css('font-size', fontSize);
      $(this).css('line-height', lineHeight);
    });

  }

}(jQuery));

/*
const settings = {
  maxWindth: 620,
  minWidth: 320,
  maxFont: 18,
  minFont: 16,
  //minLineHeignt: 1.3,
  //maxLineHeight: 1.5,
  //ratio: 35
};

function width () {
  var element = $('p');
  var elementW = element.width();
  var w = '';
  if (elementW < settings.minWidth) {
    w = settings.minWidth;
  } else if (elementW > settings.maxWindth){
    w = settings.maxWindth;
  } else {
    w = elementW;
  }
  return w;
}
//console.log(width());
*/


/*
var element = $('h1');
var elementW = element.width();
var calcW = parseInt((elementW - 320) / (620 - 320) * 100, 10);
var calcFS = 16 + (18 - 16) * calcW / 100;
*/

/*
function resize() {
  const element = $('p'),
        elementWidth = element.width(),
        width = elementWidth > settings.maxWindth ? settings.maxWindth : elementWidth < settings.minWidth ? settings.minWidth : elementWidth,
        fontBase = width / settings.ratio,
        fontSize = fontBase > settings.maxFont ? settings.maxFont : fontBase < settings.minFont ? settings.minFont : fontBase;
  element.css('font-size', fontSize + 'px');
}
resize();
*/


/*(function ($) {
  $.fn.fluidtext = function () {

    const settings = $.extend({
      maxWindth: 1200,
      minWidth: 320,
      maxFont: 18,
      minFont: 16,
      minLineHeignt: 1.3,
      maxLineHeight: 1.5,
    }, object);

    const changes = function () {
      const windowWidth = $(window).width();
      const fontSize = settings.minFont + (settings.maxFont - settings.minFont) * (windowWidth - settings.minWidth) / (settings.maxWindth - settings.minWidth);
      const lineHeight = settings.minLineHeignt + (settings.maxLineHeight - settings.minLineHeignt) * (windowWidth - settings.minWidth) / (settings.maxWindth - settings.minWidth);
    };

    return this.each(function () {
      $(windows).on('resize', function () {
        $('p').css('font-size', fontSize + 'px');
        $('p').css('line-heighte', lineHeight + 'px');
      });
    });

  }
}(jQuery));*/
