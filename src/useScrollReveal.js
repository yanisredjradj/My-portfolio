import { useEffect } from "react";

export default function useScrollReveal() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("revealed");
            }
          });
        },
        { threshold: 0.1 }
      );

      document.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el) => {
        observer.observe(el);
      });

      return () => observer.disconnect();
    }, 300);

    return () => clearTimeout(timer);
  }, []);
}