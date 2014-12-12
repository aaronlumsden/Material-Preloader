;(function(window) {

	var materialPreloader = {

		defaultsOptions: {
	        position: 'bottom',
	        height: '5px',
	        col_1: '#159756',
	        col_2: '#da4733',
	        col_3: '#3b78e7',
	        col_4: '#fdba2c',
	        fadeIn: 200,
	        fadeOut: 200
	    },

    	init: function(userOptions) {

    		var tempDiv = document.createElement('div'),
    			settings = materialPreloader.extend(materialPreloader.defaultsOptions, userOptions),
    			template;

    		materialPreloader.applyFadeConfig(settings);

    		template = "<div id='materialPreloader' class='load-bar invisible' style='height:" +
	            settings.height + ";" + settings.position +
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

	        tempDiv.innerHTML = template;
	        document.body.insertBefore(tempDiv, document.body.firstChild);

	        return materialPreloader.public;

    	},

    	extend: function ( defaults, options ) {
		    var a = Object.create(defaults);
		    Object.keys(options).map(function(prop) {
		        prop in a && (a[prop] = options[prop]);
		    });
		    return a;
		},

    	applyFadeConfig: function(settings) {
    		var tempStyle = document.createElement('style'),
    			fadeSettings = '';

    		if(settings.fadeIn !== 200 && materialPreloader.isInteger(settings.fadeIn)) {
    			fadeSettings += '.load-bar.visible { -webkit-transition-duration: ' + (settings.fadeIn/1000) + 's; transition-duration: ' + (settings.fadeIn/1000) + 's; }';
    		}

    		if(settings.fadeOut !== 200 && materialPreloader.isInteger(settings.fadeOut)) {
    			fadeSettings += '.load-bar.invisible { -webkit-transition-duration: ' + (settings.fadeOut/1000) + 's; transition-duration: ' + (settings.fadeOut/1000) + 's; }';
    		}

    		if(fadeSettings !== '') {
    			tempStyle.innerHTML = fadeSettings
    			document.body.insertBefore(tempStyle, document.body.firstChild);
    		}

    	},

    	isInteger: function(n) {
    		return Number(n) === n && n%1 === 0;
    	},

    	public: {
    		on: function() {
    			var materialDiv = document.getElementById('materialPreloader');

    			materialDiv.classList.remove('invisible');
		        materialDiv.classList.add('visible');
		    },

		    off: function() {
		    	var materialDiv = document.getElementById('materialPreloader');

		    	materialDiv.classList.remove('visible');
		        materialDiv.classList.add('invisible');
		    }
    	}

    };

    window.materialPreloader = materialPreloader.init;

})(window);