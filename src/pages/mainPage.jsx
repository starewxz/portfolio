import { Link } from "react-router-dom";
import dataProjects from "../../data-projects.js";
import Reveal from "../components/reveal.jsx";
import TechMarquee from "../components/tech-marquee.jsx";
import ProjectList from "../components/project-list.jsx";
import { ArrowRight, ArrowUpRight, Download, Send } from "../components/icons.jsx";
import { cvFile, telegram } from "../services/links.js";
import { CODING_START_LABEL, getAge, getExperienceLabel } from "../services/profile.js";

// Rotating "open to work" badge — text on a circle, pure SVG + CSS spin.
const Badge = () => (
    <svg className="spin" viewBox="0 0 120 120" width="108" height="108" aria-hidden="true">
        <defs>
            <path id="circ" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
        </defs>
        <circle cx="60" cy="60" r="58" fill="var(--pop)" stroke="var(--ink)" strokeWidth="2" />
        <text fontFamily="JetBrains Mono Variable, monospace" fontWeight="700" fontSize="11.5" letterSpacing="2.4" fill="var(--pop-ink)">
            <textPath href="#circ">OPEN TO WORK • OPEN TO WORK •</textPath>
        </text>
    </svg>
);

const MainPage = () => (
    <>
        {/* ───────── Hero ───────── */}
        <section className="container-x grid items-center gap-14 pb-10 pt-32 sm:pt-40 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)]">
            <div>
                <Reveal>
                    <p className="label m-0">
                        <b>~/stas</b> $ whoami <span className="wobble inline-block">👋</span>
                    </p>
                </Reveal>

                <Reveal delay={70}>
                    <h1 className="m-0 mt-5 text-[clamp(2.9rem,12.5vw,4.5rem)] font-bold leading-[0.9] lg:text-[clamp(4.5rem,8.2vw,7rem)]">
                        Stas
                        <br />
                        <span className="outline-text">Revasevych</span>
                    </h1>
                </Reveal>

                <Reveal delay={140}>
                    <p className="mt-8 max-w-xl text-xl leading-relaxed sm:text-2xl" style={{ color: "var(--muted)" }}>
                        Full-stack developer based in Lviv, Ukraine. I build <span className="hl font-semibold" style={{ color: "var(--ink)" }}>fast, modern web apps</span> —
                        polished frontends, solid backends, no fluff.
                    </p>
                </Reveal>

                <Reveal delay={210} className="mt-9 flex flex-wrap gap-4">
                    <Link to="/projects" className="btn btn-primary">
                        View projects <ArrowRight />
                    </Link>
                    <a className="btn" href={cvFile} download="Stas_Revasevych_CV.pdf">
                        <Download /> CV
                    </a>
                    <a className="btn" href={telegram} target="_blank" rel="noopener noreferrer">
                        <Send /> Say hi
                    </a>
                </Reveal>
            </div>

            <Reveal delay={120} className="mx-auto w-full max-w-[22rem] lg:mx-0 lg:justify-self-end">
                <div className="relative pb-6 pr-4">
                    <div className="photo-frame aspect-[4/5]">
                        <img
                            src={`${import.meta.env.BASE_URL}img/me.webp`}
                            alt="Portrait of Stanislav Revasevych"
                            width="352"
                            height="440"
                            fetchPriority="high"
                            decoding="async"
                        />
                    </div>
                    <span className="sticker -left-4 top-8 z-10 -rotate-6">&lt;React /&gt;</span>
                    <span className="sticker -right-1 top-[46%] z-10 rotate-3">full-stack</span>
                    <div className="absolute -bottom-6 -left-8 z-10">
                        <Badge />
                    </div>
                </div>
            </Reveal>
        </section>

        {/* ───────── Profile card ───────── */}
        <section className="container-x mt-10 grid gap-8 lg:grid-cols-[1fr_1fr]" aria-label="At a glance">
            <Reveal className="terminal">
                <div className="terminal-bar">
                    <span /><span /><span />
                    <b className="mono ml-2 text-xs font-semibold" style={{ color: "var(--muted)" }}>profile.json</b>
                </div>
                <pre className="mono">
{`{
  `}<span className="t-key">&quot;name&quot;</span>{`: `}<span className="t-str">&quot;Stanislav Revasevych&quot;</span>{`,
  `}<span className="t-key">&quot;role&quot;</span>{`: `}<span className="t-str">&quot;middle software engineer&quot;</span>{`,
  `}<span className="t-key">&quot;age&quot;</span>{`: `}<span className="t-str">{getAge()}</span>{`,
  `}<span className="t-key">&quot;location&quot;</span>{`: `}<span className="t-str">&quot;Ukraine, Lviv&quot;</span>{`,
  `}<span className="t-key">&quot;coding_since&quot;</span>{`: `}<span className="t-str">&quot;{CODING_START_LABEL.toLowerCase()}&quot;</span>{`,
  `}<span className="t-key">&quot;experience&quot;</span>{`: `}<span className="t-str">&quot;{getExperienceLabel()}&quot;</span>{`,
  `}<span className="t-key">&quot;stack&quot;</span>{`: [`}<span className="t-str">&quot;React&quot;</span>{`, `}<span className="t-str">&quot;TypeScript&quot;</span>{`, `}<span className="t-str">&quot;Node&quot;</span>{`],
  `}<span className="t-key">&quot;status&quot;</span>{`: `}<span className="t-str">&quot;open to opportunities&quot;</span>{`
}`}
                </pre>
            </Reveal>

            <Reveal delay={100} className="grid grid-cols-2 gap-5">
                {[
                    { v: String(dataProjects.length).padStart(2, "0"), l: "projects shipped" },
                    { v: "FS", l: "front → back" },
                    { v: "∞", l: "things left to learn" },
                    { v: "<1s", l: "load-time obsessed" },
                ].map(({ v, l }, i) => (
                    <div key={l} className={`card lift flex flex-col justify-between p-5 ${i === 1 ? "!bg-[var(--pop)] !text-[var(--pop-ink)]" : ""}`}>
                        <span className="font-display text-5xl font-bold leading-none sm:text-6xl">{v}</span>
                        <span className="mono mt-6 text-xs uppercase opacity-70">{l}</span>
                    </div>
                ))}
            </Reveal>
        </section>

        {/* ───────── Ticker ───────── */}
        <TechMarquee />

        {/* ───────── Work ───────── */}
        <section className="container-x mt-10">
            <Reveal className="mb-8 flex flex-wrap items-end justify-between gap-4">
                <div>
                    <p className="label m-0"><b>01</b> / selected work</p>
                    <h2 className="m-0 mt-2 text-5xl font-bold sm:text-7xl">Things I&apos;ve built</h2>
                </div>
                <Link to="/projects" className="btn">
                    All projects <ArrowRight />
                </Link>
            </Reveal>

            <Reveal>
                <ProjectList projects={dataProjects.slice(0, 3)} />
            </Reveal>
        </section>

        {/* ───────── Contact ───────── */}
        <section className="container-x mt-28">
            <Reveal>
                <p className="label m-0"><b>02</b> / contact</p>
                <a
                    href={telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-3 flex items-center justify-between gap-4 text-[var(--ink)] no-underline"
                >
                    <span className="font-display text-[clamp(3rem,12vw,9rem)] font-bold leading-[0.9] tracking-tighter">
                        Let&apos;s <span className="hl">talk</span>
                    </span>
                    <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full border-2 text-3xl transition-transform duration-300 group-hover:rotate-45 sm:h-28 sm:w-28 sm:text-5xl" style={{ borderColor: "var(--line)", background: "var(--pop)", color: "var(--pop-ink)" }}>
                        <ArrowUpRight />
                    </span>
                </a>
                <p className="mt-4 max-w-md text-lg" style={{ color: "var(--muted)" }}>
                    Product idea, team to join, or just a hello — Telegram is the fastest way.
                </p>
            </Reveal>
        </section>
    </>
);

export default MainPage;
