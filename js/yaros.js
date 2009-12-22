(Yaros = function(){}).prototype = {
    bigSquare: function(margin, windowHeight, windowWidth) {
        if (typeof windowHeight == 'undefined')
            windowHeight = this.getWindowHeight();
        if (typeof windowWidth == 'undefined')
            windowWidth = $('body').width();
        var min = Math.min(windowHeight, windowWidth);
        return this.bigRectangle(margin, min, min);
    },

    bigRectangle: function(margin, windowHeight, windowWidth) {
        if (typeof windowHeight == 'undefined')
            windowHeight = this.getWindowHeight();
        if (typeof windowWidth == 'undefined')
            windowWidth = $('body').width();

        var $box = $('<div></div>');
        $('body').append($box);
        $box
            .width(windowWidth - margin * 2)
            .height(windowHeight - margin * 2)
            .css({
                'position': 'absolute',
                'top': String(margin) + 'px',
                'left': String(margin) + 'px',
                'margin': '0',
                'padding': '0'
            });
        
        return $box;
    },

    addRandomly: function($container, $element) {
        $container.append($element);
        var top = String(
            this.randomInt($container.height() - $element.height())
        );
        var left = String(
            this.randomInt($container.width() - $element.width())
        );
        $element.css({
            position: 'abolute',
            top: top + 'px',
            left: left + 'px'
        });
    },

    getWindowHeight: function() {
        var h = $('body').height();
        if (h) return h;
        $('body').append('<div class="getWindowHeight"></div>');
        var $d = $('div.getWindowHeight');
        $d.height('100%');
        h = $('body').height();
        if (h) return h;
        throw "Can't determine window height";
    },

    randomInt: function(upper, lower) {
        if (typeof lower == 'undefined') lower = 0;
        return parseInt(Math.random() * ((upper - lower)) + lower);
    },

    'The': 'End'
};
