import { useEffect, useState } from "react";

const frames = ["3", "2", "1", "0"];

export function FilmCountdown({ onComplete }) {
	const [index, setIndex] = useState(0);
	const [introReady, setIntroReady] = useState(false);
	const [isComplete, setIsComplete] = useState(false);
	const number = frames[index];

	useEffect(() => {
		let timer;
		let readyTimer;
		const frame = window.requestAnimationFrame(() => {
			readyTimer = window.setTimeout(() => {
				setIntroReady(true);
				timer = window.setInterval(() => {
					setIndex((current) => {
						const next = current + 1;

						if (next >= frames.length - 1) {
							window.clearInterval(timer);
							window.setTimeout(() => {
								setIsComplete(true);
								onComplete();
							}, 520);
							return frames.length - 1;
						}

						return next;
					});
				}, 1000);
			}, 180);
		});

		return () => {
			window.cancelAnimationFrame(frame);
			window.clearTimeout(readyTimer);
			window.clearInterval(timer);
		};
	}, [onComplete]);

	return (
		<section
			className={`film-stage ${introReady ? "film-stage--ready" : ""} ${isComplete ? "film-stage--exit" : ""}`}
			aria-label="Old film countdown"
		>
			<div className="film-frame" aria-live="polite">
				{introReady ? (
					<svg className="leader-svg" viewBox="0 0 500 500" role="img" aria-label={`Countdown ${number}`}>
						<defs>
							<filter id="number-wobble">
								<feTurbulence type="fractalNoise" baseFrequency="0.018" numOctaves="2" seed={index + 7} />
								<feDisplacementMap in="SourceGraphic" scale="1.4" />
							</filter>
						</defs>

						<path className="leader-sweep" d="M250 250 L250 16 A234 234 0 0 1 486 250 Z" />
						<line className="leader-crosshair" x1="250" y1="16" x2="250" y2="484" />
						<line className="leader-crosshair" x1="16" y1="250" x2="484" y2="250" />
						<circle className="leader-ring" cx="250" cy="250" r="214" />
						<circle className="leader-ring" cx="250" cy="250" r="156" opacity="0.55" />
						<circle className="leader-ring" cx="250" cy="250" r="92" opacity="0.35" />
						<text key={number} className="leader-number" x="250" y="326" textAnchor="middle" dominantBaseline="middle">
							{number}
						</text>
					</svg>
				) : (
					<div className="leader-preload" aria-hidden="true" />
				)}

				<div className="leader-caption" aria-hidden="true">
					<span>Picture Start</span>
					<span>
						Reel 01<span className="countdown-dot" />
					</span>
				</div>
			</div>
		</section>
	);
}
