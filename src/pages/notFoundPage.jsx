import { Link } from "react-router-dom";
import { ArrowLeft } from "../components/icons.jsx";

const NotFoundPage = () => (
    <section className="container-x grid min-h-[85vh] items-center gap-12 pt-28 md:grid-cols-[1.2fr_0.8fr]">
        <div>
            <p className="label m-0"><b>error</b> — 404 not found</p>
            <p className="font-display m-0 mt-2 select-none text-[clamp(7rem,26vw,16rem)] font-bold leading-[0.85] outline-text" aria-hidden="true">
                404
            </p>
            <h1 className="m-0 mt-4 text-3xl font-bold sm:text-5xl">Вибачте, не вдалося знайти сторінку.</h1>
            <p className="mt-4 text-lg" style={{ color: "var(--muted)" }}>
                Але ми можемо вас повернути на головну.
            </p>
            <Link to="/" className="btn btn-primary mt-7">
                <ArrowLeft /> На головну
            </Link>
        </div>

        <div className="photo-frame mx-auto aspect-[4/5] w-full max-w-sm">
            <img src={`${import.meta.env.BASE_URL}img/onyak.webp`} alt="on yak photo" loading="lazy" decoding="async" />
        </div>
    </section>
);

export default NotFoundPage;
