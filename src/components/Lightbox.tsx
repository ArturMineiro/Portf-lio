import { useEffect, useRef } from "react";
import type { Shot } from "../content";
import { useLang } from "../i18n";

interface LightboxProps {
  title: string;
  shots: Shot[];
  index: number | null;
  onIndexChange: (index: number) => void;
  onClose: () => void;
}

/** Galeria em tela cheia usando <dialog> nativo: foco preso, Esc fecha, setas navegam. */
export function Lightbox({ title, shots, index, onIndexChange, onClose }: LightboxProps) {
  const { lang, t } = useLang();
  const ref = useRef<HTMLDialogElement>(null);
  const open = index !== null;

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal?.();
    if (!open && dialog.open) dialog.close?.();
  }, [open]);

  if (index === null) return <dialog ref={ref} onClose={onClose} />;

  const total = shots.length;
  const go = (delta: number) => onIndexChange((index + delta + total) % total);
  const shot = shots[index];

  return (
    <dialog
      ref={ref}
      aria-label={`${t.gallery}: ${title}`}
      onClose={onClose}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(1);
        if (e.key === "ArrowLeft") go(-1);
      }}
      // Clique fora da imagem (no backdrop) fecha
      onClick={(e) => e.target === e.currentTarget && ref.current?.close()}
      className="on-dark m-auto max-h-none max-w-none bg-transparent p-4 text-pedra"
    >
      <div className="flex w-[min(92vw,72rem)] flex-col gap-4">
        <div className="flex items-center justify-between gap-4">
          <p className="font-semibold">{title}</p>
          <button
            type="button"
            onClick={() => ref.current?.close()}
            className="rounded-full border border-pedra/50 px-4 py-1.5 text-sm hover:bg-pedra hover:text-basalto"
          >
            {t.close}
          </button>
        </div>

        <figure>
          <img
            src={shot.src}
            alt={shot.caption[lang]}
            width={shot.width}
            height={shot.height}
            className="mx-auto max-h-[72vh] w-auto rounded-md bg-white object-contain"
          />
          <figcaption className="mt-3 flex items-center justify-between gap-4 text-sm text-pedra/80">
            <span>{shot.caption[lang]}</span>
            <span className="shrink-0 tabular-nums" aria-live="polite">
              {t.counter(index + 1, total)}
            </span>
          </figcaption>
        </figure>

        <div className="flex justify-center gap-3">
          <button type="button" onClick={() => go(-1)} className="btn-nav" aria-label={t.prev}>
            ‹
          </button>
          <button type="button" onClick={() => go(1)} className="btn-nav" aria-label={t.next}>
            ›
          </button>
        </div>
      </div>
    </dialog>
  );
}
