import { useState } from "react";
import { Card } from "./components/card";

const worldFlow = [
  {
    title: "Mapa do mundo",
    body: "No mapa do mundo, o jogador escolhe a área de acesso. Essa área pode levar para uma cidade com ponto de hub, quests ou diretamente pro combate.",
  },
  {
    title: "Progresso por desbloqueio",
    body: "Quando o requisito de uma área é cumprido, a próxima é liberada. A progressão abre novas partes do mapa até chegar à última área, onde acontece o encontro com o boss.",
  },
  {
    title: "Entrada de batalha",
    body: "Nas áreas de combate, o jogador escolhe entre 3 a 6 inimigos pra enfrentar, com uma chance de aparecer algum inimigo secreto.",
  },
  {
    title: "Capital como hub",
    body: "A capital funciona como o centro de navegação do jogo, servindo como um ponnto de acesso a todas as funcionalidaddes.",
  },
];

const mechanics = [
  {
    title: "Exploração e progressão do mundo",
    label: "Mundo",
    summary:
      "O loop começa no mapa do mundo, onde o jogador escolhe entre áreas de cidade e áreas de combate. A progressão acontece por liberação sequencial de áreas até o encontro final com um boss.",
    details: [
      "Seleção de área diretamente no mapa.",
      "Fluxo entre cidade, stage e batalha.",
      "Desbloqueio de novas rotas conforme o requisito da área anterior.",
    ],
    image: "/assets/world/world_bg.jpg",
  },
  {
    title: "Batalha por turnos com foco em troca",
    label: "Combate",
    summary:
      "A batalha é focada em turnos e na troca de personagens. Quando um novo personagem entra, ele recebe o buff de SWAP, que representa a identidade central do jogo e inspirou o próprio nome do projeto.",
    details: [
      "Troca de personagem como decisão tática.",
      "Buff de SWAP aplicado no personagem que entra.",
      "Fluxo de combate com HP, especial, log e resolução de turno.",
      "Buffs e debuffs funcionam em stacks, ou cargas, aumentando de força conforme se acumulam.",
      "Cada magia aplica uma quantidade própria de stacks.",
    ],
    image: "/assets/stages/volcano/stage1/stage1_03.png",
  },
  {
    title: "Capital e sistemas conectados",
    label: "Hub",
    summary:
      "A capital foi pensada como hub principal do jogo. Ela conecta o jogador a sistemas como forja, Coliseu, casa, navio e outras áreas que servem tanto para gerenciamento quanto para progressão.",
    details: [
      "Forja para craft de itens.",
      "Coliseu para montagem de times.",
      "Casa para gerenciar personagens e inventário.",
    ],
    image: "/assets/cities/capital/capital_bg.jpg",
  },
];

const capitalSystems = [
  {
    title: "Forja",
    state: "em construção",
    body: "Espaço pensado para craft de itens, melhorias e expansão de equipamento.",
  },
  {
    title: "Coliseu",
    state: "já disponível",
    body: "Tela para montar times, organizar presets e definir composições.",
  },
  {
    title: "Casa",
    state: "já disponível",
    body: "Área para gerenciar personagens, inspecionar itens e cuidar do inventário.",
  },
  {
    title: "Torre",
    state: "planejada",
    body: "Sistema pensado para liberar mais personagens e aprofundar a progressão.",
  },
  {
    title: "Navio",
    state: "já disponível",
    body: "Ponto de acesso ao mundo e expansão da exploração entre áreas.",
  },
  {
    title: "Outras funções",
    state: "planejadas",
    body: "A capital foi desenhada para receber vários outros sistemas ainda não implementados.",
  },
];

const gallery = [
  { title: "Mapa do mundo", src: "/assets/world/world_bg.jpg" },
  { title: "Capital", src: "/assets/cities/capital/capital_bg.jpg" },
];

const techStack = [
  "React",
  "TypeScript",
  "Vite",
  "Tailwind CSS",
  "React Router",
  "Framer Motion",
  "Lucide React",
];

function App() {
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<
    (typeof gallery)[number] | null
  >(null);

  return (
    <div className="relative min-h-screen overflow-hidden bg-(--app-bg) text-(--text-primary)">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(248,234,208,0.14),linear-gradient(180deg,rgba(18,15,12,0)_0%,rgba(18,15,12,0.28)_100%))]" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <header className="mb-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-(--text-inverse)">
              portfólio de estudo
            </p>
            <h1 className="font-title text-3xl text-(--text-inverse) drop-shadow-[0_2px_4px_rgba(0,0,0,0.45)]">
              Gustavo • S.W.A.P.
            </h1>
          </div>
          <nav className="flex flex-wrap gap-3 text-sm">
            <a href="#intro" className="banner-nav">
              Introdução
            </a>
            <a href="#mechanics" className="banner-nav">
              Mecânicas
            </a>
            <a href="#capital" className="banner-nav">
              Capital
            </a>
            <a href="#tech" className="banner-nav">
              Técnico
            </a>
          </nav>
        </header>

        <main className="flex flex-1 flex-col gap-8">
          <section id="intro" className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <Card
              eyebrow="Introdução"
              className="p-6 sm:p-8"
              contentClassName="pt-6"
            >
              <h2 className="content-title text-5xl leading-none sm:text-6xl">
                Sobre
              </h2>
              <p className="body-text mt-6 max-w-3xl text-lg leading-8">
                Meu nome é Gustavo. Comecei a estudar programação e estou
                desenvolvendo o Swap como uma forma de praticar, aprender e me
                divertir ao mesmo tempo.
              </p>
              <p className="body-text mt-4 max-w-3xl text-lg leading-8">
                O jogo usa sprites de personagens já conhecidos, mas toda a
                mecânicas e layout está sendo criada por mim, com inspirações em
                outros jogos.
              </p>
            </Card>

            <Card
              eyebrow="Contexto do projeto"
              className="p-6"
              contentClassName="pt-6"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="status-pill">estudo em andamento</span>
              </div>
              <div className="mt-6 space-y-4">
                {[
                  "Estudo prático de arquitetura front-end e game UI.",
                  "Mistura de exploração, combate, progressão e gerenciamento.",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 border-b border-(--border-primary)/80 pb-4 last:border-none last:pb-0"
                  >
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-(--gold-500)" />
                    <p className="body-text text-base leading-7">{item}</p>
                  </div>
                ))}
              </div>
            </Card>
          </section>

          <section id="mechanics" className="grid gap-8">
            <Card
              eyebrow="Mecânicas"
              className="p-6 sm:p-8"
              contentClassName="card-stack pt-5"
            >
              <div>
                <h3 className="section-title text-(--text-primary)">
                  O jogo mistura exploração, progressão por áreas e combate em
                  turnos.
                </h3>
              </div>
              <div className="grid gap-6 lg:grid-cols-2">
                {worldFlow.map((step) => (
                  <Card
                    key={step.title}
                    className="p-6"
                    contentClassName="pt-3"
                  >
                    <h4 className="content-title mt-3 text-3xl">{step.title}</h4>
                    <p className="body-text mt-4 text-base leading-7">
                      {step.body}
                    </p>
                  </Card>
                ))}
              </div>
            </Card>
          </section>

          <section className="grid gap-5">
            {mechanics.map((item) => (
              <Card
                key={item.title}
                eyebrow={item.label}
                className="p-5"
                contentClassName="grid gap-5 pt-4 lg:grid-cols-[0.9fr_1.1fr]"
              >
                <div className="media-frame media-frame-landscape">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="card-stack">
                  <h4 className="content-title text-3xl">{item.title}</h4>
                  <p className="body-text text-base leading-7">
                    {item.summary}
                  </p>
                  {item.label === "Combate" ? (
                    <div className="rounded-[14px] border border-(--border-primary) bg-[#fff9ef] p-3">
                      <p className="body-text text-sm leading-7">
                        A mecânica central do jogo é o <strong>SWAP</strong>: a
                        troca de personagens aplica um buff em quem entra, e
                        essa ideia acabou definindo o próprio nome do projeto.
                      </p>
                    </div>
                  ) : null}
                  {item.label === "Mundo" ? (
                    <div className="rounded-[14px] border border-(--border-primary) bg-[#fff9ef] p-3">
                      <p className="body-text text-sm leading-7">
                        Nas áreas de combate atuais, o jogador enfrenta entre
                        <strong> 3 e 6 inimigos</strong>, dentro do intervalo já
                        implementado no projeto.
                      </p>
                    </div>
                  ) : null}
                  <div className="feature-list body-text text-sm leading-7">
                    {item.details.map((detail) => (
                      <p key={detail} className="feature-list-item">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </section>

          <section
            id="capital"
            className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]"
          >
            <Card eyebrow="Capital" className="p-8" contentClassName="pt-4">
              <h3 className="section-title">
                A capital foi pensada como o hub principal do jogo.
              </h3>
              <p className="body-text mt-5 text-base leading-8">
                Ela concentra o acesso às funcionalidades principais, como
                forja, Coliseu, casa, torre, navio e outras áreas que ainda não
                foram implementadas, mas já fazem parte da estrutura do projeto.
              </p>
              <p className="body-text mt-4 text-base leading-8">
                Essa decisão ajuda a organizar a progressão, cria um ponto
                central de retorno para o jogador e facilita a expansão do jogo
                conforme novos sistemas forem entrando.
              </p>
            </Card>

            <div className="grid gap-4 sm:grid-cols-2">
              {capitalSystems.map((system) => (
                <Card
                  key={system.title}
                  eyebrow={system.state}
                  className="detail-card p-5"
                  contentClassName="detail-card-content"
                >
                  <h4 className="content-title detail-card-title text-2xl">
                    {system.title}
                  </h4>
                  <p className="body-text detail-card-copy text-base leading-7">
                    {system.body}
                  </p>
                </Card>
              ))}
            </div>
          </section>

          <section
            id="tech"
            className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]"
          >
            <Card
              eyebrow="Base técnica"
              className="p-8"
              contentClassName="pt-4"
            >
              <h3 className="section-title">
                O projeto usa uma base moderna para experimentar UI, estado e
                fluxo.
              </h3>
              <p className="body-text mt-5 text-base leading-8">
                Na parte técnica, estou usando uma stack voltada para front-end
                moderno e iteração rápida. Isso me permite testar layout,
                navegação, componentes e comportamento de batalha de forma bem
                prática.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {techStack.map((item) => (
                  <span key={item} className="tag-chip">
                    {item}
                  </span>
                ))}
              </div>
            </Card>

            <Card
              eyebrow="Galeria"
              className="p-5"
              contentClassName="grid gap-4 pt-4 md:grid-cols-2 xl:grid-cols-3"
            >
              {gallery.map((item) => (
                <div key={item.title} className="gallery-tile">
                  <button
                    type="button"
                    className="gallery-button"
                    onClick={() => setSelectedGalleryItem(item)}
                  >
                    <div className="media-frame media-frame-landscape">
                      <img
                        src={item.src}
                        alt={item.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </button>
                  <p className="media-caption">{item.title}</p>
                </div>
              ))}
            </Card>
          </section>
        </main>
      </div>

      {selectedGalleryItem ? (
        <div className="gallery-modal" role="dialog" aria-modal="true">
          <button
            type="button"
            aria-label="Fechar imagem"
            className="gallery-modal-backdrop"
            onClick={() => setSelectedGalleryItem(null)}
          />
          <div className="gallery-modal-content">
            <img
              src={selectedGalleryItem.src}
              alt={selectedGalleryItem.title}
              className="gallery-modal-image"
            />
            <div className="gallery-modal-footer">
              <p className="modal-title">{selectedGalleryItem.title}</p>
              <button
                type="button"
                className="gallery-close"
                onClick={() => setSelectedGalleryItem(null)}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
