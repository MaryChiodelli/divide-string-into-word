const settings = {
  maxWindth: 1200,
  minWidth: 320,
  maxFont: 18,
  minFont: 16,
  minLineHeignt: 1.3,
  maxLineHeight: 1.5,
  //ratio: 35
};

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

const windowWidth = $(window).width();
const fontSize = settings.minFont + (settings.maxFont - settings.minFont) * (windowWidth - settings.minWidth) / (settings.maxWindth - settings.minWidth);
const lineHeight = settings.minLineHeignt + (settings.maxLineHeight - settings.minLineHeignt) * (windowWidth - settings.minWidth) / (settings.maxWindth - settings.minWidth);

/*
(function ($) {
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

}(jQuery));
*/
