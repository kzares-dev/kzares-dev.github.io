import { CassetteReelSvg } from "./svgs.jsx";

function getLocalizedValue(lang, value, valuePt) {
	return lang === "pt" && valuePt ? valuePt : value;
}

export function ProjectsSection({ t, lang, projects }) {
	return (
		<section className="projects-section" id="projects" aria-label={t.projectsTitle}>
			<div className="section-heading">
				<p className="section-kicker">{t.projectsKicker}</p>
				<h2>{t.projectsTitle}</h2>
			</div>
			<div className="project-grid">
				{projects.map((project) => (
					<article className={project.featured ? "project-cassette project-cassette--featured" : "project-cassette"} key={project.id}>
						<div className="cassette-shell">
							<div className="cassette-header">
								<p>{project.year}</p>
								<strong>{getLocalizedValue(lang, project.role, project.rolePt)}</strong>
							</div>
							<div className="cassette-body">
								<div className="cassette-reel" aria-hidden="true">
									<CassetteReelSvg />
								</div>
								<div className="cassette-label">
									<h3>{getLocalizedValue(lang, project.title, project.titlePt)}</h3>
									<span>{getLocalizedValue(lang, project.summary, project.summaryPt)}</span>
								</div>
								<div className="cassette-reel" aria-hidden="true">
									<CassetteReelSvg />
								</div>
							</div>

							<ProjectPreview project={project} />
							<ProjectScenes lang={lang} scenes={project.scenes || []} />
							<ProjectStack stack={project.stack} />
							<ProjectLinks project={project} />
						</div>
					</article>
				))}
			</div>
		</section>
	);
}

function ProjectPreview({ project }) {
	if (project.images?.length) {
		return (
			<figure className="project-preview project-preview--gallery">
				{project.images.map((image, imageIndex) => (
					<img src={image} alt={`${project.title} preview ${imageIndex + 1}`} key={image} />
				))}
			</figure>
		);
	}

	if (project.image) {
		return (
			<figure className="project-preview">
				<img src={project.image} alt={`${project.title} preview`} />
			</figure>
		);
	}

	return null;
}

function ProjectScenes({ lang, scenes }) {
	if (!scenes.length) {
		return null;
	}

	return (
		<div className="project-scenes">
			{scenes.map((scene) => (
				<section className="project-scene" key={scene.label}>
					<p>{scene.label}</p>
					<h4>{getLocalizedValue(lang, scene.title, scene.titlePt)}</h4>
					<span>{getLocalizedValue(lang, scene.body, scene.bodyPt)}</span>
				</section>
			))}
		</div>
	);
}

function ProjectStack({ stack }) {
	return (
		<ul className="project-stack" aria-label="Project stack">
			{stack.map((item) => (
				<li key={item}>{item}</li>
			))}
		</ul>
	);
}

function ProjectLinks({ project }) {
	return (
		<div className="project-links">
			{project.link ? <a href={project.link}>Docs</a> : null}
			{project.repo ? <a href={project.repo}>Repo</a> : null}
			{project.npm ? <a href={project.npm}>npm</a> : null}
		</div>
	);
}
