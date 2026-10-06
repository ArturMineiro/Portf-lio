import { profile } from "../content";
import { useLang } from "../i18n";
import { Waves } from "./Waves";

export function Contact() {
  const { t } = useLang();
  const socials = [
    { label: "LinkedIn", href: profile.links.linkedin },
    { label: "GitHub", href: profile.links.github },
    { label: "Instagram", href: profile.links.instagram },
  ];

  return (
    <footer id="contato" className="on-dark bg-basalto text-pedra">
      <Waves color="var(--color-pedra)" className="h-12 rotate-180" />
      <div className="mx-auto max-w-6xl px-6 pb-12 pt-20">
        <h2 className="heading text-4xl md:text-5xl">{t.contactTitle}</h2>
        <p className="mt-5 max-w-[56ch] text-lg text-pedra/75">{t.contactIntro}</p>

        <a
          href={`mailto:${profile.email}`}
          className="display mt-10 inline-block break-all text-[clamp(1.6rem,5.5vw,4.25rem)] text-mar-claro underline decoration-2 underline-offset-[0.18em] hover:text-sol"
        >
          {profile.email}
        </a>

        <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-lg font-medium">
          {socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noopener noreferrer" className="link hover:text-sol">
                {s.label}
              </a>
            </li>
          ))}
          <li>
            <a href={profile.cv} download className="link hover:text-sol">
              {t.downloadCv}
            </a>
          </li>
        </ul>

        <p className="mt-20 border-t border-pedra/20 pt-6 text-sm text-pedra/60">
          © {new Date().getFullYear()} Artur Mineiro. {t.rights}
        </p>
      </div>
    </footer>
  );
}
