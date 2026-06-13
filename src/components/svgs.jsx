export function CassetteReelSvg() {
	return (
		<svg viewBox="0 0 120 120" role="img" aria-label="Cassette reel">
			<circle className="cassette-reel-outer" cx="60" cy="60" r="52" />
			<circle className="cassette-reel-inner" cx="60" cy="60" r="16" />
			<path className="cassette-reel-spokes" d="M60 12V40 M60 80V108 M12 60H40 M80 60H108 M26 26L46 46 M74 74L94 94 M94 26L74 46 M46 74L26 94" />
		</svg>
	);
}

export function FilmRailSvg({ className }) {
	return (
		<svg className={className} viewBox="0 0 1440 72" preserveAspectRatio="none" aria-hidden="true">
			<rect width="1400" height="72" fill="#050403" />
			{Array.from({ length: 24 }).map((_, index) => (
				<rect key={index} x={16 + index * 60} y="16" width="30" height="40" rx="5" fill="#f4dfb8" opacity="0.82" />
			))}
			<path d="M0 70H1440" stroke="#b6843f" strokeWidth="3" />
			<path d="M0 2H1440" stroke="#b6843f" strokeWidth="3" />
		</svg>
	);
}

export function CameraSvg() {
	return (
		<svg className="camera-svg" viewBox="0 0 620 500" role="img" aria-label="Vintage SVG camera">
			<defs>
				<filter id="paperNoise">
					<feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="2" seed="11" />
					<feColorMatrix type="saturate" values="0" />
					<feComponentTransfer>
						<feFuncA type="table" tableValues="0 0.18" />
					</feComponentTransfer>
					<feBlend in="SourceGraphic" mode="multiply" />
				</filter>
			</defs>
			<rect className="camera-shadow" x="92" y="360" width="440" height="42" rx="21" />
			<path className="camera-strap" d="M112 180 C96 86 182 44 258 84 M504 178 C526 76 418 38 348 86" />
			<rect className="camera-body" x="82" y="128" width="456" height="246" rx="34" />
			<rect className="camera-top" x="158" y="86" width="238" height="74" rx="18" />
			<rect className="camera-leather" x="110" y="178" width="400" height="158" rx="24" />
			<circle className="lens-outer" cx="310" cy="258" r="122" />
			<circle className="lens-mid" cx="310" cy="258" r="88" />
			<circle className="lens-glass" cx="310" cy="258" r="60" />
			<circle className="lens-glint" cx="284" cy="232" r="17" />
			<rect className="viewfinder" x="408" y="158" width="70" height="44" rx="12" />
			<circle className="shutter" cx="178" cy="114" r="17" />
			<rect className="label-plate" x="154" y="300" width="78" height="28" rx="6" />
			<path className="camera-lines" d="M132 218 H216 M404 218 H488 M132 252 H196 M424 252 H488" />
		</svg>
	);
}
