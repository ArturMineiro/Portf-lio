import { useState } from "react";
import { projects, type Project } from "../content";
import { useLang } from "../i18n";
import { Lightbox } from "./Lightbox";

export function Projects() {
  const { t } = useLang();
  return (
    <section id="projetos" className="border-y border-linha bg-pedra-2">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="heading text-4xl md:text-5xl">{t.projectsTitle}</h2>
        <p className="mt-4 max-w-[60ch] text-lg text-musgo">{t.projectsIntro}</p>
        <div className="mt-16 space-y-24">
          {projects.map((p, i) => (
            <ProjectRow key={p.id} project={p} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectRow({ project, reverse }: { project: Project; reverse: boolean }) {
  const { lang, t } = useLang();
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const { shots } = project;
  const current = shots[active];
  const title = project.title[lang];

  return (
    <article
      aria-labelledby={`${project.id}-titulo`}
      className={`grid items-start gap-10 *:min-w-0 ${
        reverse ? "lg:grid-cols-[1fr_1.45fr] lg:[&>*:first-child]:order-2" : "lg:grid-cols-[1.45fr_1fr]"
      }`}
    >
      <div>
        {/* Moldura de janela de navegador para as capturas */}
        <div className="overflow-hidden rounded-lg border border-basalto bg-white">
          <div className="flex items-center gap-1.5 border-b border-basalto bg-basalto px-3 py-2" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-pedra/40" />
            <span className="size-2.5 rounded-full bg-pedra/40" />
            <span className="size-2.5 rounded-full bg-pedra/40" />
          </div>
          <button
            type="button"
            onClick={() => setLightbox(active)}
            aria-label={t.openShot(active + 1, shots.length)}
            className="block w-full cursor-zoom-in"
          >
            <img
              src={current.src}
              alt={current.caption[lang]}
              width={current.width}
              height={current.height}
              loading="lazy"
              className="aspect-[800/467] w-full bg-white object-contain"
            />
          </button>
        </div>
        <p className="mt-3 text-sm text-musgo" aria-hidden="true">{current.caption[lang]}</p>

        <ul className="mt-4 flex gap-2 overflow-x-auto pb-2" aria-label={t.gallery}>
          {shots.map((s, i) => (
            <li key={s.src} className="shrink-0">
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={t.showShot(i + 1)}
                aria-current={i === active}
                className={`block overflow-hidden rounded border-2 transition-colors ${
                  i === active ? "border-mar" : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <img src={s.src} alt="" width={96} height={56} loading="lazy" className="h-14 w-24 object-cover object-top" />
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="lg:pt-10">
        <h3 id={`${project.id}-titulo`} className="heading text-3xl">
          {title}
        </h3>
        <p className="mt-5 leading-relaxed text-musgo">{project.summary[lang]}</p>
        <ul className="mt-6 space-y-2">
          {project.highlights.map((h) => (
            <li key={h.pt} className="flex gap-3">
              <span className="mt-2.5 h-0.5 w-4 shrink-0 bg-mar" aria-hidden="true" />
              <span>{h[lang]}</span>
            </li>
          ))}
        </ul>
        <a href={project.repo} target="_blank" rel="noopener noreferrer" className="link mt-8 inline-block font-semibold text-mar">
          {t.viewCode}
        </a>
      </div>

      <Lightbox title={title} shots={shots} index={lightbox} onIndexChange={setLightbox} onClose={() => setLightbox(null)} />
    </article>
  );
}
