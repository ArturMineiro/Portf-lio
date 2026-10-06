import { education, experience, type TimelineEntry } from "../content";
import { useLang } from "../i18n";

export function Timeline() {
  const { t } = useLang();
  return (
    <section id="trajetoria" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="heading mb-14 text-4xl md:text-5xl">{t.pathTitle}</h2>
      <Group title={t.experience} entries={experience} />
      <Group title={t.education} entries={education} />
    </section>
  );
}

function Group({ title, entries }: { title: string; entries: TimelineEntry[] }) {
  const { lang, t } = useLang();
  return (
    <div className="mb-16 grid gap-6 last:mb-0 md:grid-cols-[12rem_1fr]">
      <h3 className="text-sm font-semibold text-musgo md:pt-1">{title}</h3>
      <ol className="divide-y divide-linha border-y border-linha">
        {entries.map((e) => (
          <li key={e.org} className="grid gap-2 py-7 md:grid-cols-[9rem_1fr] md:gap-8">
            <p className="text-sm font-medium tabular-nums text-musgo md:pt-1.5">
              {e.period[lang]}
              {e.current && (
                <span className="ml-2 inline-block rounded-full bg-sol px-2 py-0.5 text-xs font-semibold text-basalto">
                  {t.current}
                </span>
              )}
            </p>
            <div>
              <h4 className="text-xl font-semibold">
                {e.role[lang]}
                <span className="font-normal text-musgo">, {e.org}</span>
              </h4>
              <p className="mt-3 max-w-[68ch] leading-relaxed text-musgo">{e.description[lang]}</p>
              {e.stack && (
                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Stack">
                  {e.stack.map((s) => (
                    <li key={s} className="rounded-full border border-linha px-3 py-1 text-sm">
                      {s}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
