import { Link } from "react-router-dom";
import Reveal from "../components/reveal.jsx";
import { ArrowRight, Download } from "../components/icons.jsx";
import { cvFile } from "../services/links.js";
import { CODING_START_LABEL, getAge, getExperienceLabel } from "../services/profile.js";

const buildFacts = (age, experience) => [
    { k: "age", v: String(age) },
    { k: "location", v: "Ukraine, Lviv" },
    { k: "role", v: "Middle Software Engineer" },
    { k: "company", v: "Insiders Software, Lviv" },
    { k: "coding since", v: `${CODING_START_LABEL} · ${experience}` },
    { k: "focus", v: "Full-stack web & systems" },
    { k: "languages", v: "Ukrainian (native), English B2/C1, Polish A2, Spanish A2" },
    { k: "off-screen", v: "Boxing, football, volleyball" },
];

const AboutPage = () => {
    // Derived from fixed dates in services/profile.js, so it is always current.
    const now = new Date();
    const age = getAge(now);
    const experience = getExperienceLabel(now);
    const facts = buildFacts(age, experience);

    return (
    <section className="container-x pt-32 sm:pt-40">
        <header className="mb-14 max-w-5xl">
            <p className="label m-0"><b>~/about</b> — readme.md</p>
            <h1 className="m-0 mt-3 text-[clamp(2.6rem,8vw,6.5rem)] font-bold leading-[0.95]">
                I&apos;m Stas — a full-stack engineer who <span className="hl">learns by shipping</span>.
            </h1>
        </header>

        <div className="grid items-start gap-12 lg:grid-cols-[1.5fr_0.5fr]">
            <div className="prose-about max-w-3xl text-lg" style={{ color: "var(--muted)" }}>
                <Reveal as="p" className="!text-2xl !leading-relaxed sm:!text-[1.65rem]" style={{ color: "var(--ink)" }}>
                    I&apos;m a {age}-year-old Middle Software Engineer at Insiders Software in Lviv, where I design, build,
                    test and deploy software end to end. I started programming in {CODING_START_LABEL} after leaving behind
                    a football career, and have {experience} of hands-on experience built through consistent practice and
                    real projects.
                </Reveal>

                <Reveal as="p">
                    My foundation is full-stack web development with React, Next.js, TypeScript, Node.js and NestJS.
                    From my first project — a vanilla-JavaScript{" "}
                    <Link className="link-u" to="/projects/projectDetails/timer">Rubik&apos;s Cube timer</Link>{" "}
                    — I moved quickly to real products: an e-commerce{" "}
                    <Link className="link-u" to="/projects/projectDetails/fluffy-steps">storefront</Link>{" "}
                    that I designed and built on my own, and a{" "}
                    <Link className="link-u" to="/projects/projectDetails/kuzco-crm">CRM system</Link>{" "}
                    for a retail business, developed from November 2024 to May 2026 in a team with a senior engineer.
                    Alongside this I delivered further client work, including an{" "}
                    <Link className="link-u" to="/projects/projectDetails/tenderness">online store</Link>, a{" "}
                    <Link className="link-u" to="/projects/projectDetails/sauna-polska">booking-focused website</Link>{" "}
                    and an{" "}
                    <Link className="link-u" to="/projects/projectDetails/tmn-academy">education platform</Link>.
                </Reveal>

                <Reveal as="p">
                    Professionally, my work spans the whole lifecycle of a system: designing architecture and making
                    key technical decisions, end-to-end development and testing, containerisation and deployment, and
                    building internal tools for the company. I also take part in conversations with large clients and
                    contribute to large-scale projects, which keeps me close to the business goals behind the code.
                </Reveal>

                <Reveal as="p">
                    Adaptability is one of my strongest skills. I learn new technologies by working with them in
                    production — most recently the Atlassian Forge framework and PHP Laravel — and I keep my skills
                    current through continuous study and side projects such as a real-time collaborative editor, a
                    multi-vendor marketplace and a self-hosted learning platform.
                </Reveal>

                <Reveal as="p">
                    Being self-taught has shaped how I work.{" "}
                    <span className="hl font-semibold" style={{ color: "var(--ink)" }}>Consistency beats intensity</span>:
                    I make steady progress every day, work through hard problems instead of avoiding them,
                    and treat every project as a chance to raise my own standard.
                </Reveal>

                <Reveal as="p">
                    Outside of engineering I train in boxing and enjoy football and volleyball — habits that keep me
                    focused, resilient and ready for the next challenge.
                </Reveal>

                <Reveal as="p">
                    If you would like to see how I work, explore the projects or get in touch — I&apos;m always glad to
                    discuss interesting products and teams.
                </Reveal>

                <Reveal className="mt-10 flex flex-wrap gap-4">
                    <Link to="/projects" className="btn btn-primary">
                        View projects <ArrowRight />
                    </Link>
                    <a className="btn" href={cvFile} download="Stas_Revasevych_CV.pdf">
                        <Download /> CV
                    </a>
                </Reveal>
            </div>

            <Reveal delay={120} as="aside" className="card p-6 lg:sticky lg:top-28" aria-label="Quick facts">
                <h2 className="label m-0 mb-5 !text-[0.8rem]"><b>#</b> quick facts</h2>
                <dl className="m-0 grid gap-5">
                    {facts.map(({ k, v }) => (
                        <div key={k} className="border-t-2 pt-3" style={{ borderColor: "var(--line)" }}>
                            <dt className="label">{k}</dt>
                            <dd className="m-0 mt-1 text-lg font-semibold">{v}</dd>
                        </div>
                    ))}
                </dl>
            </Reveal>
        </div>
    </section>
    );
};

export default AboutPage;
