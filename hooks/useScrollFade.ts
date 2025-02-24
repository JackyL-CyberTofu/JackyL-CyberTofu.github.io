// hooks/useScrollFade.js
import { useState, useEffect } from "react";

const useScrollFade = (elementId: string, fadeSpeed = 300) => {
    const [opacity, setOpacity] = useState("opacity-0");
    const [hasFadedIn, setHasFadedIn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById(elementId);
            if (!element) return;

            const elementRect = element.getBoundingClientRect();
            const elementTop = elementRect.top;
            const windowHeight = window.innerHeight;

            const newOpacity = Math.min(1, Math.max(0, (windowHeight - elementTop) / fadeSpeed));

            if (!hasFadedIn || newOpacity > (parseInt(opacity.replace("opacity-", "")) / 100)) {
                if (newOpacity >= 1) {
                    setOpacity("opacity-100");
                    setHasFadedIn(true);
                } else if (newOpacity >= 0.75) {
                    setOpacity("opacity-75");
                } else if (newOpacity >= 0.5) {
                    setOpacity("opacity-50");
                } else if (newOpacity >= 0.25) {
                    setOpacity("opacity-25");
                } else {
                    setOpacity("opacity-0");
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [opacity, hasFadedIn, elementId, fadeSpeed]);

    return opacity;
};

export default useScrollFade;