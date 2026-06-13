export function ContentPanel({ id, kicker, title, body, className }) {
	return (
		<section className={className} id={id} aria-label={title}>
			<p className="section-kicker">{kicker}</p>
			<div>
				<h2>{title}</h2>
				<p>{body}</p>
			</div>
		</section>
	);
}
