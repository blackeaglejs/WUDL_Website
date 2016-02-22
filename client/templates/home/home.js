Template.home.onRendered(function(){
	$('.owl-carousel').owlCarousel({
		autoplay: 3000,
		navigation: true,
		slideSpeed: 200,
		paginationSpeed: 800,
		singleItem: true,
		items: 1
	});
});