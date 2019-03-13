 jQuery('#fading_images .disc_2, #fading_images .disc_3, #fading_images .disc_4, #fading_images .disc_5').hide();
 
 var $elements = jQuery('#fading_images .disc_1, #fading_images .disc_2, #fading_images .disc_3, #fading_images .disc_4, #fading_images .disc_5');
 
 function anim_loop(index) {
 $elements.eq(index).delay(2000).fadeIn(1000, function() {
 var $self = jQuery(this);
 setTimeout(function() {
 $self.fadeOut(2000);
 anim_loop((index + 1) % $elements.length);
 }, 3000);
 });
 }
 
 anim_loop(0);