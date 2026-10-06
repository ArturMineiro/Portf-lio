import { useEffect, useState } from "react";
import { useLang } from "../i18n";
import type { Lang } from "../content";

const sections = ["trajetoria", "projetos", "tecnologias", "contato"] as const;

export function Header() {
  const { t, lang, setLang } = useLang();
  const [open, setOpen] = useState(false);

  const labels = [t.nav.path, t.nav.projects, t.nav.skills, t.nav.contact];

  // Fecha o menu mobile com Esc
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const links = sections.map((id, i) => (
    <li key={id}>
      <a href={`#${id}`} onClick={() => setOpen(false)} className="block py-2 transition-colors hover:text-mar md:py-0">
        {labels[i]}
      </a>
    </li>
  ));

  return (
    <header className="sticky top-0 z-40 border-b border-linha bg-pedra/90 backdrop-blur">
      <a
        href="#conteudo"
        className="absolute left-4 top-2 -translate-y-20 rounded bg-basalto px-4 py-2 text-pedra focus:translate-y-0"
      >
        {t.skip}
      </a>

      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4" aria-label="Principal">
        <a href="#inicio" className="heading text-lg">
          Artur Mineiro
        </a>

        <ul className="hidden items-center gap-8 text-sm font-medium md:flex">{links}</ul>

        <div className="flex items-center gap-3">
          <LangSwitch lang={lang} setLang={setLang} label={t.langLabel} />
          <button
            type="button"
            className="rounded-full border border-basalto px-4 py-1.5 text-sm font-medium md:hidden"
            aria-expanded={open}
            aria-label={open ? t.menuClose : t.menuOpen}
            aria-controls="menu-mobile"
            onClick={() => setOpen((v) => !v)}
          >
            Menu
          </button>
        </div>
      </nav>

      <ul
        id="menu-mobile"
        hidden={!open}
        className="border-t border-linha px-6 py-3 text-base font-medium md:hidden"
      >
        {links}
      </ul>
    </header>
  );
}

function LangSwitch({ lang, setLang, label }: { lang: Lang; setLang: (l: Lang) => void; label: string }) {
  const options: { value: Lang; short: string; name: string }[] = [
    { value: "pt", short: "PT", name: "Português" },
    { value: "en", short: "EN", name: "English" },
  ];
  return (
    <div role="group" aria-label={label} className="flex rounded-full border border-basalto p-0.5 text-xs font-semibold">
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          lang={o.value}
          aria-pressed={lang === o.value}
          aria-label={o.name}
          onClick={() => setLang(o.value)}
          className={`rounded-full px-2.5 py-1 transition-colors ${
            lang === o.value ? "bg-basalto text-pedra" : "hover:text-mar"
          }`}
        >
          {o.short}
        </button>
      ))}
    </div>
  );
}
