;
(function($) {
    var defaults = {
        position: 'bottom',
        height: '5px',
        col_1: '#159756',
        col_2: '#da4733',
        col_3: '#3b78e7',
        col_4: '#fdba2c',
        fadeIn: 200,
        fadeOut: 200
    }
    $.materialPreloader = function(options) {
        var settings = $.extend({}, defaults, options);
        $template =
            "<div id='materialPreloader' class='load-bar' style='height:" +
            settings.height + ";display:none;" + settings.position +
            ":0px'><div class='load-bar-container'><div class='load-bar-base base1' style='background:" +
            settings.col_1 +
            "'><div class='color red' style='background:" + settings.col_2 +
            "'></div><div class='color blue' style='background:" +
            settings.col_3 +
            "'></div><div class='color yellow' style='background:" +
            settings.col_4 +
            "'></div><div class='color green' style='background:" +
            settings.col_1 +
            "'></div></div></div> <div class='load-bar-container'><div class='load-bar-base base2' style='background:" +
            settings.col_1 +
            "'><div class='color red' style='background:" + settings.col_2 +
            "'></div><div class='color blue' style='background:" +
            settings.col_3 +
            "'></div><div class='color yellow' style='background:" +
            settings.col_4 +
            "'></div> <div class='color green' style='background:" +
            settings.col_1 + "'></div> </div> </div> </div>";
        $('body').prepend($template);
        this.on = function() {
            $('#materialPreloader').fadeIn(settings.fadeIn);
        }
        this.off = function() {
            $('#materialPreloader').fadeOut(settings.fadeOut);
        }
    }
}(jQuery));
