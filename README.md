Material Design Preloader!s
=============

A jQuery plugin that recreates the Material Design preloader (as seen on inbox).


![materialPreloader.js](http://i60.tinypic.com/mj60lw.jpg)

I was fascinated when I first saw the preloader for Google's inbox website so I thought I'd recreate it and turn it into a plugin so that others can use it in their app or website. 

### How to use

Make sure you have jQuery included and include 'materialPreloader.js' after jQuery.

```js
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script type="text/javascript" src="materialPreloader.js"></script>

```

You also need to include 'materialPreloader.css'.

```css
<link rel="stylesheet" type="text/css" href="css/materialPreloader.css">
```

You can then instantiate the plugin along with its options (if required).

```js
<script type="text/javascript">

 preloader = new $.materialPreloader({
        position: 'top',
        height: '5px',
        col_1: '#159756',
        col_2: '#da4733',
        col_3: '#3b78e7',
        col_4: '#fdba2c',
        fadeIn: 200,
        fadeOut: 200
    });
 
</script>
```

You can then call the following functions to turn the preloader on & off

```js
 preloader.on();
 preloader.off();
```

### materialPreloader Options

| Option        | Required           | Description						| Options	  | Default 	|
| ------------- |--------------------|----------------------------------|-------------|-------------|
| position	    | No		 		 | 	Position to place the preloader	| top/bottom  |	bottom   	|
| height      	| No      	 		 | 	The height of the preloader bar	| any length  |	5px   		|
| col_1      	| No      	 		 |  Color 1 option					| any color   |	#159756   	|
| col_2      	| No      	 		 | 	Color 2 option			 		| any color   |	#da4733   	|
| col_3      	| No      	 		 |  Color 3 option					| any color   |	#3b78e7  	|
| col_4      	| No      	 		 | 	Color 4 option					| any color   |	#fdba2c  	|
| fadeIn      	| No      	 		 |  Speed in milliseconds 			| any speed   |	200   		|
| fadeOut      	| No      	 		 |  Speed in milliseconds			| any speed	  |	200   		|




## Browser Support

 - Chrome
 - Safari
 - Firefox
 - Not tested in IE
