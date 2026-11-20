
  /*!
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011–2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
!function(a){function f(a,b){if(!(a.originalEvent.touches.length>1)){a.preventDefault();var c=a.originalEvent.changedTouches[0],d=document.createEvent("MouseEvents");d.initMouseEvent(b,!0,!0,window,1,c.screenX,c.screenY,c.clientX,c.clientY,!1,!1,!1,!1,0,null),a.target.dispatchEvent(d)}}if(a.support.touch="ontouchend"in document,a.support.touch){var e,b=a.ui.mouse.prototype,c=b._mouseInit,d=b._mouseDestroy;b._touchStart=function(a){var b=this;!e&&b._mouseCapture(a.originalEvent.changedTouches[0])&&(e=!0,b._touchMoved=!1,f(a,"mouseover"),f(a,"mousemove"),f(a,"mousedown"))},b._touchMove=function(a){e&&(this._touchMoved=!0,f(a,"mousemove"))},b._touchEnd=function(a){e&&(f(a,"mouseup"),f(a,"mouseout"),this._touchMoved||f(a,"click"),e=!1)},b._mouseInit=function(){var b=this;b.element.bind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),c.call(b)},b._mouseDestroy=function(){var b=this;b.element.unbind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),d.call(b)}}}(jQuery);


(function($) {
  $(document).ready(function() {

        $( ".beforeafterbox" ).width($(".beforeafterbox .imagewrapper img").width());

      
        $( ".beforeafterbox .imagewrapper" ).resizable({
          maxHeight: 300,
          maxWidth: $(".beforeafterbox .imagewrapper img").width(),
          minHeight: 300,
          minWidth: 3
        });

        $(".frontArrow").draggable({
            // containment: '.beforeafterbox',
            start: function (event, ui) {
                const $parentBox = $(this).closest('.beforeafterbox');
                const $imageWrapper = $parentBox.find('.imagewrapper');
                let initialPosition = $parentBox.width() / 2;

                if($imageWrapper.width() != $parentBox.width() / 2){
                  initialPosition = $imageWrapper.width();
                }
                

                // Store the starting position in the draggable's data
                $(this).data('startOffset', initialPosition);
            },
            drag: function (event, ui) {
                const $parentBox = $(this).closest('.beforeafterbox');
                const $imageWrapper = $parentBox.find('.imagewrapper');
                const maxWidth = $parentBox.width();
                const minWidth = 3;

                // Calculate the new width by adding the initial offset
                const startOffset = $(this).data('startOffset') || 0;
                const newWidth = Math.max(minWidth, Math.min(ui.position.left + startOffset, maxWidth));
                console.log(ui.position.left);

                $imageWrapper.width(newWidth);
            },
            axis: "x" // Restrict dragging to horizontal axis only
        });


        $(window).on('resize', function(e) { 
          $( ".beforeafterbox .imagewrapper img" ).width($(".beforeafterbox").width());

          console.log($(".beforeafterbox").width());
          
          $( ".beforeafterbox .imagewrapper" ).resizable({
            maxHeight: 300,
            maxWidth: $(".beforeafterbox").width(),
            minHeight: 300,
            minWidth: 3
          });
        });

        $(".beforeafterbox .after").hover(
          function() {
              // On hover (mouseenter)
              $(this).closest('.beforeafterbox').addClass('active');
          }, 
          function() {
              // On hover out (mouseleave)
              $(this).closest('.beforeafterbox').removeClass('active');
          }
        );

        $(".beforeafterbox .imagewrapper img").hover(
          function() {
              // On hover (mouseenter)
              // console.log($(this).closest('.beforeafterbox img'));
              $(this).closest('.beforeafterbox').addClass('active');
          }, 
          function() {
              // On hover out (mouseleave)
              $(this).closest('.beforeafterbox').removeClass('active');
          }
        );

        $(".beforeafterbox .beforeafter").hover(
          function() {
              // On hover (mouseenter)
              // console.log($(this).closest('.beforeafterbox img'));
              $(this).closest('.beforeafterbox').addClass('active');
          }, 
          function() {
              // On hover out (mouseleave)
              $(this).closest('.beforeafterbox').removeClass('active');
          }
        );
  }); // end $(document).ready()
})(jQuery);
