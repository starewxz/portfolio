import { useCallback, useEffect, useRef, useState } from "react";
import { thumbOf } from "../../data-projects.js";
import { ArrowLeft, ArrowRight } from "./icons.jsx";

// Native scroll-snap slider: no carousel library, swipe/trackpad work for free.
const Gallery = ({ title, images }) => {
    const track = useRef(null);
    const [index, setIndex] = useState(0);

    const goTo = useCallback((i) => {
        const el = track.current;
        if (!el) return;
        const next = (i + images.length) % images.length;
        el.scrollTo({ left: next * el.clientWidth, behavior: "smooth" });
    }, [images.length]);

    useEffect(() => {
        const el = track.current;
        if (!el) return;
        let frame = 0;
        const onScroll = () => {
            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(() => setIndex(Math.round(el.scrollLeft / el.clientWidth)));
        };
        el.addEventListener("scroll", onScroll, { passive: true });
        return () => {
            el.removeEventListener("scroll", onScroll);
            cancelAnimationFrame(frame);
        };
    }, []);

    const onKeyDown = (e) => {
        if (e.key === "ArrowRight") goTo(index + 1);
        if (e.key === "ArrowLeft") goTo(index - 1);
    };

    return (
        <div className="min-w-0 max-w-full" role="group" aria-roledescription="carousel" aria-label={`${title} screenshots`} onKeyDown={onKeyDown}>
            <div className="relative">
                <div ref={track} className="gallery" tabIndex={0}>
                    {images.map((src, i) => (
                        <div key={src}>
                            <img
                                src={src}
                                alt={`${title} screenshot ${i + 1} of ${images.length}`}
                                width="1400"
                                height="875"
                                loading={i === 0 ? "eager" : "lazy"}
                                fetchPriority={i === 0 ? "high" : "auto"}
                                decoding="async"
                            />
                        </div>
                    ))}
                </div>

                {images.length > 1 && (
                    <>
                        <button className="icon-btn absolute left-3 top-1/2 -translate-y-1/2" onClick={() => goTo(index - 1)} aria-label="Previous screenshot">
                            <ArrowLeft />
                        </button>
                        <button className="icon-btn absolute right-3 top-1/2 -translate-y-1/2" onClick={() => goTo(index + 1)} aria-label="Next screenshot">
                            <ArrowRight />
                        </button>
                    </>
                )}
            </div>

            {images.length > 1 && (
                <div className="mt-4 flex items-center gap-2 overflow-x-auto pb-2">
                    <span className="label mr-2 shrink-0">{String(index + 1).padStart(2, "0")}/{String(images.length).padStart(2, "0")}</span>
                    {images.map((src, i) => (
                        <button key={src} className="thumb" aria-current={i === index} aria-label={`Show screenshot ${i + 1}`} onClick={() => goTo(i)}>
                            <img src={thumbOf(src)} alt="" width="72" height="45" loading="lazy" decoding="async" />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Gallery;
