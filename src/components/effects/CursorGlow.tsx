import { useEffect } from "react";

export function CursorGlow() {
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    let frame = 0;
    const root = document.documentElement;

    const updateCursorGlow = (event: PointerEvent) => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        root.style.setProperty("--mouse-x", `${event.clientX}px`);
        root.style.setProperty("--mouse-y", `${event.clientY}px`);
        root.style.setProperty("--cursor-glow-opacity", "1");
      });
    };

    const hideCursorGlow = () => {
      root.style.setProperty("--cursor-glow-opacity", "0");
    };

    window.addEventListener("pointermove", updateCursorGlow, { passive: true });
    window.addEventListener("pointerleave", hideCursorGlow);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", updateCursorGlow);
      window.removeEventListener("pointerleave", hideCursorGlow);
    };
  }, []);

  return null;
}
