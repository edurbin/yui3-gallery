YUI.add('gallery-array-slider', function(Y) {

//Create slider that supports an array of possible values
Y.ArraySlider = Y.Base.build( 'slider', Y.SliderTickBase,
	[ Y.SliderArrayRange, Y.ClickableRail ] );


}, '@VERSION@' ,{skinnable:false, requires:['gallery-slider-tick-base', 'clickable-rail', 'gallery-slider-array-range']});
