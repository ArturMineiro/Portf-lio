import { profile } from "../content";
import { useLang } from "../i18n";
import { Waves } from "./Waves";

export function Hero() {
  const { t } = useLang();
  const [first, last] = profile.name.split(" ");

  return (
    <section id="inicio" className="relative">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 pb-16 pt-14 md:grid-cols-[1fr_auto] md:items-end md:pt-24">
        <div>
          <p className="mb-6 text-lg font-medium text-musgo">{t.role}</p>
          <h1 className="display text-[clamp(3.25rem,11vw,8.5rem)]">
            <span className="block">{first}</span>
            <span className="block">{last}</span>
          </h1>
          <p className="mt-8 max-w-[58ch] text-lg leading-relaxed text-musgo">{t.intro}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#projetos" className="btn-primary">
              {t.seeProjects}
            </a>
            <a href={profile.cv} download className="btn-secondary">
              {t.downloadCv}
            </a>
          </div>
        </div>

        <img
          src={profile.photo}
          alt={t.photoAlt}
          width={800}
          height={800}
          fetchPriority="high"
          className="aspect-[4/5] w-56 rounded-t-full object-cover object-top md:w-72"
        />
      </div>

      <Waves className="h-24 md:h-32" animate />
    </section>
  );
}
