export function SiteHeader({ t, lang, onLanguageChange }) {
	return (
		<header className="site-header">
			<a className="brand-mark brand-mark--compact" href="/" aria-label="Kzares home">
				<span>{t.brand}</span>
			</a>
			<nav className="site-nav" aria-label="Main navigation">
				<a href="#prologue">{t.nav[0]}</a>
				<a href="#acts">{t.nav[1]}</a>
				<a href="#projects">{t.nav[2]}</a>
				<a href="#stack">{t.nav[3]}</a>
				<a href="#contact">{t.nav[4]}</a>
			</nav>
			<div className="language-switcher" aria-label="Language selector">
				<button className={lang === "en" ? "is-active" : ""} type="button" onClick={() => onLanguageChange("en")}>
					EN
				</button>
				<button className={lang === "pt" ? "is-active" : ""} type="button" onClick={() => onLanguageChange("pt")}>
					PT
				</button>
			</div>
		</header>
	);
}
