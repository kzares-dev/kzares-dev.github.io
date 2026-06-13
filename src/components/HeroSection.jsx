import { CameraSvg } from "./svgs.jsx";

export function HeroSection({ t }) {
	return (
		<div className="hero-grid">
			<div className="hero-copy">
				<p className="eyebrow">{t.eyebrow}</p>
				<p className="starring-line">{t.starring}</p>
				<h1>{t.name}</h1>
				<p className="hero-summary">{t.summary}</p>

				<div className="hero-actions">
					<a className="ticket-button" href="#acts">
						{t.primary}
					</a>
					<a className="ghost-button" href={`mailto:${t.email}`}>
						{t.secondary}
					</a>
				</div>
			</div>

			<div className="star-card" aria-label="Star actor poster for Jorge Casares">
				<div className="poster-ribbon">{t.badge}</div>
				<div className="portrait-frame">
					<img src="/profile.jpg" alt="Jorge Casares portrait" />
				</div>
				<CameraSvg />
				<div className="star-meta">
					<span>{t.metaLeft}</span>
					<span>{t.metaRight}</span>
				</div>
			</div>
		</div>
	);
}
