import { FilmRailSvg } from "./svgs.jsx";

export function ActsSection({ t }) {
	return (
		<section className="acts-section" id="acts" aria-label={t.actsTitle}>
			<div className="section-heading">
				<p className="section-kicker">01-05</p>
				<h2>{t.actsTitle}</h2>
			</div>
			<div className="film-strip-scroll" aria-label="Scrollable film strip">
				<FilmRailSvg className="film-rail film-rail--top" />
				<div className="act-list">
					{t.acts.map((act) => (
						<article className="act-card" key={act.kicker}>
							<p>{act.kicker}</p>
							<h3>{act.title}</h3>
							<strong>{act.role}</strong>
							<span>{act.body}</span>
						</article>
					))}
				</div>
				<FilmRailSvg className="film-rail film-rail--bottom" />
			</div>
		</section>
	);
}
