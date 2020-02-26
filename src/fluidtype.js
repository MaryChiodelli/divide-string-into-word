(function ($) {

  $.fn.fluidtype = function (options) {

    const settings = $.extend({
        minFS: 24,
        maxFS: 54,
        minLH: 1.0,
        maxLH: 1.2,
        minVW: 320,
        maxVW: 1020,
      }, options);

    function widthPerc() {
      const windowVW = $(window).width();
      const widthPerc = parseInt((windowVW - settings.minVW) / (settings.maxVW - settings.minVW) * 100, 10);
      return widthPerc;
    }

    const windowWidth = widthPerc();
    let fontSize = settings.minFS + (settings.maxFS - settings.minFS) * windowWidth / 100;
    let lineHeight = settings.maxLH - (settings.maxLH - settings.minLH) * windowWidth / 100;

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
