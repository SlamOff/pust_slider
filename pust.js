;(function($){
    Array.prototype.maxInArray = function() {
        return Math.max.apply(null, this);
    };
    var settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        slideSpeed: 300,
        vertical: false,
        width: '80%',
        arrows: true,
        prevArrow: '.prev',
        nextArrow: '.next',
        prevText: '',
        nextText: ''
    };
    var mtds = {
        create: function(el){
            el.addClass('pust_slider');
            el.children().addClass('pust_slide');
            var slides = document.querySelectorAll('.pust_slide');
            var heights = [];
            for(var i = 0; i < slides.length; i++){
                heights.push(parseFloat(getComputedStyle(slides[i]).height));
            }
            el.height(heights.maxInArray());
            el.wrap('<div class="pust_slider_wrapper"></div>');
        },

        init: function(options){
            settings = $.extend(settings, options);
            var self = this;
            var slides = self.children();
            this.eq(0).width(settings.width);
            slides.width(this.innerWidth()/settings.slidesToShow + 'px');
            var w = slides.width();
            slides.each(function(i){
                this.style.left = parseFloat(w) * i + 'px';
            });
            if(settings.arrows){
                self.parent().prepend('<div class="pust_next ' + settings.nextArrow.slice(1) + '">' + settings.nextText + '</div>');
                self.parent().prepend('<div class="pust_prev ' + settings.prevArrow.slice(1) + '">' + settings.prevText + '</div>');
                $(settings.prevArrow).on('click', function(){
                    if(!mtds.isGoing){
                        if(parseFloat(slides.eq(0).css('left')) < 0){
                            mtds.moveSlides(slides, w, 1);
                        }
                        else{
                            return false;
                        }
                    }
                });
                $(settings.nextArrow).on('click', function(){
                    if(!mtds.isGoing){
                        if(parseFloat(slides.eq(slides.length - 1).css('left')) >= self.width()){
                            mtds.moveSlides(slides, w, -1);
                        }
                        else {
                            return false;
                        }
                    }
                });
            };
            return this.each(function(){
                mtds.create(self);
            });
        },

        isGoing: false,

        moveSlides: function(slides, width, dir){
            var current = slides.css('left');
            slides.each(function(){
                var left = $(this).css('left');
                $(this).css({
                    left: (parseFloat(left) + width * settings.slidesToScroll * dir) + 'px',
                    transitionDuration: settings.slideSpeed/1000 + 's'
                });
                mtds.isGoing = true;
                $(this).on('transitionend', function(){
                    mtds.isGoing = false;
                });
            });
        },

        moveOnDots: function(){
            //
        }
    };
    $.fn.pust = function(method){
        if(mtds[method]){
            return mtds[method].apply( this, Array.prototype.slice.call(arguments, 1));
        }
        else if(typeof method === 'object' || !method){
            return mtds.init.apply(this, arguments);
        }
        else{
            throw new SyntaxError( 'Method ' + '"' + method + '"' + ' doesn\'t exist for jQuery.pust' );
        }
    };
})(jQuery);