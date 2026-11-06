import { aiWorkflow } from "../content";
import { useLang } from "../i18n";

export function AiWorkflow() {
  const { lang, t } = useLang();
  return (
    <section id="ia" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="heading text-4xl md:text-5xl">{t.aiTitle}</h2>
      <p className="mt-4 max-w-[60ch] text-lg text-musgo">{t.aiIntro}</p>

      <ol className="mt-14 grid gap-px overflow-hidden rounded-lg border border-linha bg-linha sm:grid-cols-2 lg:grid-cols-4">
        {aiWorkflow.map((step, i) => (
          <li key={step.title.pt} className="bg-pedra p-6">
            <span className="text-sm font-semibold tabular-nums text-mar">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-3 text-xl font-semibold">{step.title[lang]}</h3>
            <p className="mt-3 leading-relaxed text-musgo">{step.text[lang]}</p>
          </li>
        ))}
      </ol>

      <p className="mt-8 max-w-[68ch] leading-relaxed text-musgo">{t.aiParallel}</p>
    </section>
  );
}
