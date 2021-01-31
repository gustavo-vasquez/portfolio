(function() {
	document.querySelector("header").innerHTML = getHeaderHTML();
	document.querySelector("footer").innerHTML = getFooterHTML();
	const element = document.getElementById('my_projects');

	document.getElementById('see_projects').addEventListener('click', function(event) {
		event.preventDefault();
		element.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	});
})();

function getHeaderHTML() {
	return `<div class="row">
		<div class="col-6">
			<button id="projects_toggler" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#project_list" aria-controls="project_list" aria-expanded="false" aria-label="Toggle projects">
				Proyectos <span class="dropdown-toggle align-middle"></span>
			</button>
		</div>
		<div class="col-6 text-end">
			<a href="about.html" class="animate">Acerca de mí</a>
			<br>
			<a href="contact.html" class="animate">Contacto</a>
		</div>
	</div>
	<div class="collapse navbar-collapse" id="project_list">
		<ul class="navbar-nav me-auto mb-2 mb-lg-0">
			<li class="nav-item">
				<a class="nav-link" href="projects/logios.html">Logios</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="projects/cvbuilder.html">CVBuilder</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="projects/minibird.html">MiniBird</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="projects/streadio.html">Streadio</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="projects/find_my_subtitles.html">Find my subtitles</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="projects/winnotes.html">WinNotes</a>
			</li>
		</ul>
	</div>`;
}

function getFooterHTML() {
	return `<footer>
		<hr/>
		<div class="row">
		<div class="col-12 col-md-4 pb-3 pb-md-0 text-center text-md-start">
			<span class="d-block">Gustavo Vasquez</span>
			<span class="text-muted">Técnico en desarrollo web</span>
		</div>
		<div class="col-12 col-md-4 pb-3 pb-md-0 text-center">
			<a href="about.html" class="animate">Acerca de mí</a>
			<br>
			<a href="contact.html" class="animate">Contacto</a>
		</div>
		<div class="col-12 col-md-4 text-center text-md-end">
			<div class="social-buttons">
				<a href="mailto:vasquez.mgustavo@gmail.com" title="Correo"><i class="bi-envelope"></i></a>
				<a href="https://github.com/gustavo-vasquez" title="Github"><i class="bi-github"></i></a>
				<a href="https://www.linkedin.com/in/gustavo-vasquez-7568b680/" title="Linkedin"><i class="bi-linkedin"></i></a>
			<div>
		</div>
	</footer>`;
}