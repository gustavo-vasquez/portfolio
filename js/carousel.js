(function() {
	const carouselImages = document.querySelectorAll(".carousel-grid > img");
	let gallery = {
		currentImage: 0,
		direction: { right: 1, left: 0 },
		list: []
	};
	
	carouselImages.forEach(image => {
		gallery.list.push({ image: image.src, text: image.alt, title: image.dataset.title });
	});
	
	document.querySelector('.carousel-arrow.right').addEventListener('click', function() { carouselGoTo(gallery.direction.right, this) });
	document.querySelector('.carousel-arrow.left').addEventListener('click', function() { carouselGoTo(gallery.direction.left, this) });
	
	carouselImages.forEach(element => {
		element.addEventListener('click', function() {
			let thisContext = this;
			
			if(thisContext.src !== gallery.list[gallery.currentImage].image) {
				gallery.currentImage = gallery.list.findIndex(element => element.image === thisContext.src);
				updateCarousel();
			}
		});
	});
	
	function carouselGoTo(direction, thisContext) {
		let currentImage = thisContext.parentElement.querySelector('img');
		
		switch(direction) {
			case gallery.direction.right:
				if(gallery.currentImage < gallery.list.length - 1)
					gallery.currentImage = gallery.currentImage + 1;
				else
					gallery.currentImage = 0;
				break;
			case gallery.direction.left:
				if(gallery.currentImage > 0)
					gallery.currentImage = gallery.currentImage - 1;
				else
					gallery.currentImage = gallery.list.length - 1;
				break;
			default:
				break;
		}
		//console.time('updateCarousel');
		updateCarousel();
		//console.timeEnd('updateCarousel');
	}
	
	function updateCarousel() {
		const carouselGallery = document.querySelector('.carousel-gallery');
		
		for(children of carouselGallery.children) {
			if(children.nodeName === 'IMG') {
				let clone = children.cloneNode(true);
				clone.src = gallery.list[gallery.currentImage].image;
				clone.alt = gallery.list[gallery.currentImage].text;
				children.remove();
				carouselGallery.appendChild(clone);
			}
		}
		
		for(children of carouselGallery.parentElement.children) {
			if(children.classList.contains('card-footer'))
				children.innerHTML = gallery.list[gallery.currentImage].title;
		}
		
		carouselImages.forEach((image, index) => {
			if(index === gallery.currentImage)
				image.classList.add("active");
			else
				image.classList.remove("active");
		});
	}
})();