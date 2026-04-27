"use client";

import { useEffect } from "react";

export default function RevealProvider() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const observeRevealElements = (root = document) => {
      const elements = root.querySelectorAll?.("[data-reveal]") ?? [];
      elements.forEach((element) => {
        if (!element.classList.contains("is-visible")) {
          observer.observe(element);
        }
      });
    };

    observeRevealElements();

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;

          if (node.matches("[data-reveal]") && !node.classList.contains("is-visible")) {
            observer.observe(node);
          }

          observeRevealElements(node);
        });
      });
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}
