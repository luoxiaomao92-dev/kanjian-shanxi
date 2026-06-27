import { useEffect, useRef, useState } from "react";

export default function LazyImage({ src, enabled = true, rootMargin = "0px", ...props }) {
  const imageRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (!enabled) {
      return undefined;
    }

    const image = imageRef.current;

    if (!image) {
      return undefined;
    }

    if (!("IntersectionObserver" in window)) {
      setShouldLoad(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0.01 }
    );

    observer.observe(image);

    return () => observer.disconnect();
  }, [enabled, rootMargin]);

  return (
    <img
      ref={imageRef}
      src={enabled && shouldLoad ? src : undefined}
      data-src={src}
      loading="lazy"
      decoding="async"
      {...props}
    />
  );
}
