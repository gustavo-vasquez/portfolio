(function() {
	const element = document.getElementById('my_projects');

	document.getElementById('see_projects').addEventListener('click', function(event) {
		event.preventDefault();
		element.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	});
})();