import { useEffect, useRef } from "react";

// One shared observer for every reveal on the page.
let observer;
const getObserver = () => {
    if (!observer && typeof IntersectionObserver !== "undefined") {
        observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("in");
                        observer.unobserve(entry.target);
                    }
                }
            },
            { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
        );
    }
    return observer;
};

const Reveal = ({ as: Tag = "div", delay = 0, className = "", children, ...rest }) => {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        const io = getObserver();
        if (!el) return;
        if (!io) {
            el.classList.add("in");
            return;
        }
        io.observe(el);
        return () => io.unobserve(el);
    }, []);

    return (
        <Tag ref={ref} className={`reveal ${className}`} style={{ "--d": `${delay}ms` }} {...rest}>
            {children}
        </Tag>
    );
};

export default Reveal;
