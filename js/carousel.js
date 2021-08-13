(function() {
	const carouselPreviews = document.querySelectorAll(".carousel-grid > img");
	const carouselTitle = document.querySelector('.carousel-container > .card-header') || document.querySelector('.carousel-container > .card-footer');
	const carouselGallery = document.querySelector('.carousel-container > .carousel-gallery');

	let gallery = {
		currentImage: 0,
		direction: { right: 1, left: 0 },
		list: []
	};
	
	carouselPreviews.forEach((image, index) => {
		gallery.list.push({ image: image.getAttribute("src"), text: image.alt, title: image.dataset.title });

		image.addEventListener('click', function() {
			let thisContext = this;
			
			if(thisContext.getAttribute("src") !== gallery.list[gallery.currentImage].image) {
				gallery.currentImage = gallery.list.findIndex(element => element.image === thisContext.getAttribute("src"));
				updateCarousel();
			}
		});

		let img = document.createElement("IMG");
		img.src = gallery.list[index].image;
		img.alt = image.alt;

		if(index !== gallery.currentImage)
			img.classList.add('img-fluid','d-none');
		else {
			carouselTitle.innerHTML = image.dataset.title;
			img.classList.add('img-fluid');
		}

		carouselGallery.append(img);
	});
	
	document.querySelector('.carousel-arrow.right').addEventListener('click', function() { carouselGoTo(gallery.direction.right) });
	document.querySelector('.carousel-arrow.left').addEventListener('click', function() { carouselGoTo(gallery.direction.left) });
	
	function carouselGoTo(direction) {
		let slideDirectionClass;
		
		switch(direction) {
			case gallery.direction.right:
				slideDirectionClass = "slide-to-left";
				if(gallery.currentImage < gallery.list.length - 1)
					gallery.currentImage = gallery.currentImage + 1;
				else
					gallery.currentImage = 0;
				break;
			case gallery.direction.left:
				slideDirectionClass = "slide-to-right";
				if(gallery.currentImage > 0)
					gallery.currentImage = gallery.currentImage - 1;
				else
					gallery.currentImage = gallery.list.length - 1;
				break;
			default:
				break;
		}
		
		updateCarousel(slideDirectionClass);
		
	}
	
	function updateCarousel(slideDirectionClass) {
		carouselTitle.innerHTML = gallery.list[gallery.currentImage].title;

		carouselGallery.querySelectorAll('img').forEach((image, index) => {
			image.classList.remove("slide-to-left", "slide-to-right");

			if(index === gallery.currentImage) {
				if(slideDirectionClass !== undefined)
					image.classList.add(slideDirectionClass);
				
				image.classList.remove("d-none");
			}
			else
				image.classList.add("d-none");
		});
		
		carouselPreviews.forEach((image, index) => {
			if(index === gallery.currentImage)
				image.classList.add("active");
			else
				image.classList.remove("active");
		});
	}
})();