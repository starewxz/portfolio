import { useEffect } from "react";

const SUFFIX = "Stanislav Revasevych";

// Sets the browser-tab title. Pass `null` to leave the title to a child component,
// `undefined` for the default (home) title.
export default function useDocumentTitle(title) {
    useEffect(() => {
        if (title === null) return;
        document.title = title ? `${title} — ${SUFFIX}` : `${SUFFIX} — Full-stack Developer`;
    }, [title]);
}
