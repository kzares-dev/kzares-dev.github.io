export function EpilogueSection({ t }) {
	return (
		<section className="epilogue-panel" id="contact" aria-label={t.contactTitle}>
			<p className="section-kicker">Final Reel</p>
			<div>
				<h2>{t.contactTitle}</h2>
				<p>{t.contact}</p>
				<div className="contact-links" aria-label="Contact links">
					<a href={`mailto:${t.email}`}>{t.email}</a>
					<a href={t.github}>GitHub</a>
					<a href={t.linkedin}>LinkedIn</a>
				</div>
			</div>
		</section>
	);
}
