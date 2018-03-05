// 图片预加载

(function($){
  function preload(imgs, options) {
    this.imgs = ('string' === typeof imgs) ? [imgs] : imgs;
    this.opts = $.extend({}, Preload.DEFAULTS, options);
    this._unordered();
  }
  Preload.DEFAULTS = {
    each : null,  // 方法， 每一张图片加载完毕后执行
    all : null,  // 方法， 所有图片加载完毕后执行
  }
  Preload.prototype._unordered = function () {  //  无需加载
    var imgs = this.imgs;

    $.each(imgs, function(index, src){
      var imgObj = new Image();

      $(imgObj).on('load error', function () {
        $(this).attr('src') = src;
      });

    });
  };
})(jQuery);
