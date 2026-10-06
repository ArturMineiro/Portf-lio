import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { App } from "../App";
import { LangProvider } from "../i18n";
import { projects } from "../content";

const renderApp = (initial: "pt" | "en" = "pt") =>
  render(
    <LangProvider initial={initial}>
      <App />
    </LangProvider>,
  );

describe("Portfólio", () => {
  it("mostra nome, seções e todos os projetos", () => {
    renderApp();
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("ArturMineiro");
    for (const name of ["Trajetória", "Projetos", "Tecnologias", "Vamos conversar"]) {
      expect(screen.getByRole("heading", { level: 2, name })).toBeInTheDocument();
    }
    expect(screen.getAllByRole("article")).toHaveLength(projects.length);
    expect(screen.getByText(/Solution TI/)).toBeInTheDocument();
    expect(screen.getAllByText("Spring Boot").length).toBeGreaterThan(0);
    expect(screen.getByText("Ferramentas e integrações")).toBeInTheDocument();
  });

  it("não tem imagens de projeto repetidas", () => {
    for (const p of projects) {
      const srcs = p.shots.map((s) => s.src);
      expect(new Set(srcs).size).toBe(srcs.length);
    }
  });

  it("troca o idioma e atualiza lang, título e URL", async () => {
    const user = userEvent.setup();
    renderApp("pt");
    await user.click(screen.getByRole("button", { name: "English" }));

    expect(screen.getByRole("heading", { level: 2, name: "Background" })).toBeInTheDocument();
    expect(document.documentElement.lang).toBe("en");
    expect(document.title).toContain("full-stack web developer");
    expect(window.location.search).toBe("?lang=en");
    expect(localStorage.getItem("lang")).toBe("en");
  });

  it("abre a galeria, navega com as setas e fecha", async () => {
    const user = userEvent.setup();
    renderApp("pt");
    const [first] = projects;
    const article = screen.getAllByRole("article")[0];

    await user.click(within(article).getByRole("button", { name: `Ampliar imagem 1 de ${first.shots.length}` }));
    const dialog = screen.getByRole("dialog");
    expect(dialog).toHaveAttribute("open");
    expect(within(dialog).getByText(`1 de ${first.shots.length}`)).toBeInTheDocument();

    await user.click(within(dialog).getByRole("button", { name: "Próxima imagem" }));
    expect(within(dialog).getByText(`2 de ${first.shots.length}`)).toBeInTheDocument();

    await user.click(within(dialog).getByRole("button", { name: "Imagem anterior" }));
    await user.click(within(dialog).getByRole("button", { name: "Imagem anterior" }));
    expect(within(dialog).getByText(`${first.shots.length} de ${first.shots.length}`)).toBeInTheDocument();

    await user.click(within(dialog).getByRole("button", { name: "Fechar" }));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("miniatura troca a imagem principal", async () => {
    const user = userEvent.setup();
    renderApp("pt");
    const article = screen.getAllByRole("article")[0];
    await user.click(within(article).getByRole("button", { name: "Mostrar imagem 3" }));
    expect(within(article).getByRole("button", { name: /Ampliar imagem 3 de/ })).toBeInTheDocument();
  });
});
