import { skills, tools } from "../content";
import { useLang } from "../i18n";

export function Skills() {
  const { lang, t } = useLang();
  return (
    <section id="tecnologias" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="heading mb-14 text-4xl md:text-5xl">{t.skillsTitle}</h2>
      <div className="grid gap-12 md:grid-cols-3">
        {skills.map((group) => (
          <div key={group.title.pt}>
            <h3 className="mb-4 text-sm font-semibold text-musgo">{group.title[lang]}</h3>
            <dl className="divide-y divide-linha border-y border-linha">
              {group.items.map((s) => (
                <div key={s.name} className="flex items-baseline justify-between gap-4 py-3">
                  <dt className="text-xl font-semibold">{s.name}</dt>
                  <dd className="shrink-0 text-sm tabular-nums text-musgo">{t.years(s.years, s.plus)}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>

      <div className="mt-16 grid gap-10 border-t border-linha pt-10 md:grid-cols-2">
        {tools.map((group) => (
          <div key={group.title.pt}>
            <h3 className="mb-4 text-sm font-semibold text-musgo">{group.title[lang]}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item} className="rounded-full border border-linha px-4 py-2 font-medium">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
