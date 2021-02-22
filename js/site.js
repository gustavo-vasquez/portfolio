(function() {
	document.querySelectorAll('.see-next').forEach(element => {
		element.addEventListener('click', function(event) {
			event.preventDefault();
			document.querySelector(element.hash).scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
		});
	});
	
	let anchorLinks = {
		home: "index.html",
		about: "about.html",
		contact: "contact.html",
		logios: "projects/logios.html",
		cvbuilder: "projects/cvbuilder.html",
		minibird: "projects/minibird.html",
		streadio: "projects/streadio.html",
		findMySubtitles: "projects/find_my_subtitles.html",
		winNotes: "projects/winnotes.html"
	}
	
	parseLocalLinks();
	
	function parseLocalLinks() {
		const initialPath = location.pathname.substring(location.pathname.indexOf("portfolio-page/") + 15);
		const PROJECTS_PATH = "projects/";
		const UP_LEVEL_PATH = "../";
		
		if(initialPath.startsWith(PROJECTS_PATH)) {
			anchorLinks.home = UP_LEVEL_PATH + anchorLinks.home;
			anchorLinks.about = UP_LEVEL_PATH + anchorLinks.about;
			anchorLinks.contact = UP_LEVEL_PATH + anchorLinks.contact;
			anchorLinks.logios = anchorLinks.logios.substr(PROJECTS_PATH.length);
			anchorLinks.cvbuilder = anchorLinks.cvbuilder.substr(PROJECTS_PATH.length);
			anchorLinks.minibird = anchorLinks.minibird.substr(PROJECTS_PATH.length);
			anchorLinks.streadio = anchorLinks.streadio.substr(PROJECTS_PATH.length);
			anchorLinks.findMySubtitles = anchorLinks.findMySubtitles.substr(PROJECTS_PATH.length);
			anchorLinks.winNotes = anchorLinks.winNotes.substr(PROJECTS_PATH.length);
		}
		
		document.querySelector("header").innerHTML = getHeaderHTML();
		document.querySelector("footer").innerHTML = getFooterHTML();
	}
	
	function getHeaderHTML() {
		return `<div class="row">
			<div class="col-6">
				<a href=${anchorLinks.home} class="animate">Inicio</a>
				<button id="projects_toggler" class="navbar-toggler d-block" type="button" data-bs-toggle="collapse" data-bs-target="#project_list" aria-controls="project_list" aria-expanded="false" aria-label="Toggle projects">
					Proyectos<span class="dropdown-toggle align-middle"></span>
				</button>
			</div>
			<div class="col-6 text-end">
				<a href=${anchorLinks.about} class="animate">Acerca de mí</a>
				<br>
				<a href=${anchorLinks.contact} class="animate">Contacto</a>
			</div>
			<div class="collapse navbar-collapse rounded" id="project_list">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<a class="nav-link" href=${anchorLinks.logios}>Logios</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href=${anchorLinks.cvbuilder}>CVBuilder</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href=${anchorLinks.minibird}>MiniBird</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href=${anchorLinks.streadio}>Streadio</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href=${anchorLinks.findMySubtitles}>Find my subtitles</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href=${anchorLinks.winNotes}>WinNotes</a>
					</li>
				</ul>
			</div>
		</div>`;
	}

	function getFooterHTML() {
		return `<hr/>
			<div class="row">
			<div class="col-12 col-md-4 pb-3 pb-md-0 text-center text-md-start">
				<span class="d-block">Gustavo Vasquez Zurita</span>
				<span class="text-muted">Técnico en desarrollo web</span>
			</div>
			<div class="col-12 col-md-4 pb-3 pb-md-0 text-center">
				<a href=${anchorLinks.about} class="animate">Acerca de mí</a>
				<br>
				<a href=${anchorLinks.contact} class="animate">Contacto</a>
			</div>
			<div class="col-12 col-md-4 text-center text-md-end">
				<div class="social-buttons">
					<a href="mailto:vasquez.mgustavo@gmail.com" title="Correo"><i class="bi-envelope d-inline-flex"></i></a>
					<a href="https://github.com/gustavo-vasquez" target="_blank" title="Github"><i class="bi-github d-inline-flex"></i></a>
					<a href="https://www.linkedin.com/in/gustavo-vasquez-7568b680/" target="_blank" title="Linkedin"><i class="bi-linkedin d-inline-flex"></i></a>
				</div>
			</div>`;
	}
})();