import { useId } from "react";

interface WavesProps {
  /** Cor das faixas escuras. */
  color?: string;
  className?: string;
  animate?: boolean;
}

/**
 * Faixa de ondas no padrão do calçadão de Copacabana.
 * Cada ladrilho tem 160×48: uma faixa ondulada escura sobre fundo transparente.
 */
export function Waves({ color = "var(--color-basalto)", className = "", animate = false }: WavesProps) {
  // useId pode conter caracteres inválidos em url(#...)
  const id = `onda${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
  return (
    <div className={`overflow-hidden ${className}`} aria-hidden="true">
      <svg
        className={`block h-full ${animate ? "onda-anima" : ""}`}
        style={{ width: "calc(100% + 160px)", marginLeft: "-160px" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id={id} width="160" height="48" patternUnits="userSpaceOnUse">
            <path
              d="M0 12 C26.7 0 53.3 0 80 12 C106.7 24 133.3 24 160 12 V36 C133.3 48 106.7 48 80 36 C53.3 24 26.7 24 0 36 Z"
              style={{ fill: color }}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" style={{ fill: `url(#${id})` }} />
      </svg>
    </div>
  );
}
