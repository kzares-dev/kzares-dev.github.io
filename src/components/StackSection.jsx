export function StackSection({ t }) {
	return (
		<section className="stack-section" id="stack" aria-label={t.stackTitle}>
			<div className="section-heading">
				<p className="section-kicker">Cast</p>
				<h2>{t.stackTitle}</h2>
			</div>
			<div className="skill-marquee">
				{t.skills.map((skill) => (
					<span key={skill}>{skill}</span>
				))}
			</div>
		</section>
	);
}
