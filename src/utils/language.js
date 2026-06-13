export function detectInitialLanguage() {
	if (typeof window === "undefined") {
		return "en";
	}

	const storedLanguage = window.localStorage.getItem("kzares-lang");

	if (storedLanguage === "en" || storedLanguage === "pt") {
		return storedLanguage;
	}

	const languages = [window.navigator.language, ...(window.navigator.languages || [])].filter(Boolean);
	const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
	const isBrazilLocale = languages.some((language) => language.toLowerCase() === "pt-br");
	const isPortugueseLocale = languages.some((language) => language.toLowerCase().startsWith("pt"));
	const isBrazilTimeZone = timeZone === "America/Sao_Paulo";

	return isBrazilLocale || (isPortugueseLocale && isBrazilTimeZone) ? "pt" : "en";
}

export function persistLanguage(language) {
	if (typeof window !== "undefined") {
		window.localStorage.setItem("kzares-lang", language);
		document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
	}
}
