import { useCallback, useEffect, useState } from "react";
import { portfolioCopy } from "../data/portfolioCopy.js";
import { detectInitialLanguage, persistLanguage } from "../utils/language.js";
import { ActsSection } from "./ActsSection.jsx";
import { ContentPanel } from "./ContentPanel.jsx";
import { EpilogueSection } from "./EpilogueSection.jsx";
import { FilmCountdown } from "./FilmCountdown.jsx";
import { HeroSection } from "./HeroSection.jsx";
import { ProjectsSection } from "./ProjectsSection.jsx";
import { SiteHeader } from "./SiteHeader.jsx";
import { StackSection } from "./StackSection.jsx";

export default function PortfolioApp({ projects = [] }) {
	const [showHero, setShowHero] = useState(false);
	const [lang, setLang] = useState("en");
	const t = portfolioCopy[lang];

	useEffect(() => {
		setLang(detectInitialLanguage());
	}, []);

	useEffect(() => {
		persistLanguage(lang);
	}, [lang]);

	const handleCountdownComplete = useCallback(() => {
		setShowHero(true);
	}, []);

	return (
		<main className="portfolio-shell">
			<FilmCountdown onComplete={handleCountdownComplete} />

			<section className={`hero-stage ${showHero ? "hero-stage--visible" : ""}`} aria-label="Portfolio">
				<SiteHeader t={t} lang={lang} onLanguageChange={setLang} />
				<HeroSection t={t} />
				<ContentPanel id="prologue" kicker="00" title={t.prologueTitle} body={t.prologue} className="prologue-panel" />
				<ActsSection t={t} />
				<ProjectsSection t={t} lang={lang} projects={projects} />
				<StackSection t={t} />
				<EpilogueSection t={t} />
			</section>
		</main>
	);
}
