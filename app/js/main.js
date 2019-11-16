//$('.fake').before('<i class="fas fa-check"></i>');


function closeMenu() {
	$('.showcase_preview').fadeOut();
}

$('.showcase_preview_img_btn-close').click(closeMenu);

$('.showcase_gallery_item_activ_btn').wrap('<a href="#zoom"></a>');


$(document).ready(function() {
  $(".drop").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 600);
    return false;
  });
});

$('.zoom1').click(function(){
	$('.showcase_preview').fadeIn();
	$('.showcase_preview_img').css('background-image', 'url(img/img1.jpeg)');
});


$('.zoom2').click(function(){
	$('.showcase_preview_img').css('background-image', 'url(img/img2.jpeg)');
	$('.showcase_preview').fadeIn();
});

$('.zoom3').click(function(){
	$('.showcase_preview_img').css('background-image', 'url(img/img3.jpeg)');
	$('.showcase_preview').fadeIn();
});

$('.zoom4').click(function(){
	$('.showcase_preview_img').css('background-image', 'url(img/img4.jpeg)');
	$('.showcase_preview').fadeIn();
});


$('.zoom5').click(function(){
	$('.showcase_preview_img').css('background-image', 'url(img/img5.jpeg)');
	$('.showcase_preview').fadeIn();
});


$('.zoom6').click(function(){
	$('.showcase_preview_img').css('background-image', 'url(img/img6.jpeg)');
	$('.showcase_preview').fadeIn();
});



