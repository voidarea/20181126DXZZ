/**
 * Created by Neo on 2016/10/13.
 */
;(function($) {
  $.fn.imageCenter = function(options) {
    var s = $.extend(
      {
        size: 1
      },
      options
    )

    var imgDefereds = []

    var image = this

    var widthArray = []

    image.each(function() {
      var dfd = $.Deferred()
      $(this).bind('load', function() {
        dfd.resolve()
      })

      if (this.complete)
        setTimeout(function() {
          dfd.resolve()
        }, 1000)

      imgDefereds.push(dfd)

      $(this).width('100%')
    })

    $.when.apply(null, imgDefereds).done(function() {
      changeSize()
      imageWH()
    })

    function imageWH() {
      assignImageValue()
    }

    function changeSize() {
      image.each(function() {
        var parent = $(this).parent()

        var width = parent.outerWidth()
        widthArray.push(width)

        var minWidth = Math.min.apply(Math, widthArray)
        var size = s.size

        // parent.height(Math.floor(minWidth * size))
      })
    }

    function assignImageValue() {
      image.each(function() {
        var w = $(this).innerWidth()
        var h = $(this).innerHeight()
        var parent = $(this).parent()
        var widthParent = parent.innerWidth()
        var heightParent = parent.innerHeight()
        parent.height(widthParent)

        console.log('w=' + w, 'h=' + h, 'widthParent=' + widthParent, 'heightParent=' + heightParent)
        $(this).css({
          width: 'auto',
          height: 'auto'
        })

        if (w > h) {
          $(this).height(widthParent)
          // $(this).width(widthParent)
          var currentWidth = $(this).width()
          $(this).css({
            'margin-left': -(currentWidth / 2 - widthParent / 2)
          })
        } else if ((w = h)) {
          // $(this).height(heightParent)
          $(this).width(widthParent)
          var currentWidth = $(this).width()
        } else {
          $(this).width(widthParent)
          var currentHeight = $(this).height()
          $(this).width(widthParent)
          $(this).css({
            'margin-top': -(currentHeight / 2 - heightParent / 2)
          })
        }
      })
    }

    $(window).resize(function() {
      widthArray = []
      changeSize()
      assignImageValue()
    })
  }
})(jQuery)
