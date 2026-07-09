import { useEffect, useMemo, useState } from "react";
import placeDetails from "../data/placeDetails.js";
import places from "../data/places.json";
import "../presentation.css";

const presentationPlaceIds = [
  "jinshang-museum",
  "shuanglin-temple",
  "yingxian-pagoda",
  "yungang-grottoes",
  "huayan-temple",
  "shanhua-temple"
];

function firstImage(value) {
  if (!value) return null;
  if (typeof value === "string") return value;
  return value.src ?? value.image ?? null;
}

function pointImage(point) {
  return firstImage(point?.images?.[0]) ?? firstImage(point?.image);
}

function featureImage(feature) {
  return (
    firstImage(feature?.images?.[0]) ??
    firstImage(feature?.image) ??
    pointImage(feature?.points?.find((point) => pointImage(point)))
  );
}

function getPlaceVisuals(place, detail) {
  const mainVisual =
    place.photo ??
    pointImage(detail?.feature?.points?.find((point) => pointImage(point))) ??
    featureImage(detail?.feature) ??
    detail?.heroSketch ??
    place.sketch;

  return {
    cover: detail?.heroSketch ?? place.sketch ?? mainVisual,
    main: mainVisual
  };
}

function makePlaceSlideData() {
  return presentationPlaceIds
    .map((id, index) => {
      const place = places.find((item) => item.id === id);
      const detail = placeDetails[id];

      if (!place || !detail) return null;

      return {
        ...place,
        order: String(index + 1).padStart(2, "0"),
        eyebrow: detail.eyebrow,
        tags: detail.tags ?? place.tags,
        question: place.focus,
        visuals: getPlaceVisuals(place, detail)
      };
    })
    .filter(Boolean);
}

function makeSlides(placeSlides) {
  const placeTemplateSlides = placeSlides.flatMap((place) => [
    {
      type: "place-cover",
      place
    },
    {
      type: "image",
      place
    },
    {
      type: "question",
      place
    }
  ]);

  return [
    {
      type: "cover",
      image: "/assets/maps/shanxi-map-visual.svg"
    },
    {
      type: "toc",
      image: "/assets/maps/shanxi-map-base.svg",
      places: placeSlides
    },
    ...placeTemplateSlides,
    {
      type: "ending",
      image: "/assets/sketches/yungang-grottoes-sketch.png"
    }
  ];
}

function SlideImage({ src, alt, mode = "contain" }) {
  return (
    <div className={`presentation-image presentation-image-${mode}`}>
      <img src={src} alt={alt} />
    </div>
  );
}

function CoverSlide({ slide }) {
  return (
    <section className="presentation-slide presentation-slide-cover">
      <div className="presentation-title-block">
        <p className="presentation-kicker">Architecture Field Notes</p>
        <h1>看见山西</h1>
        <p>建筑观察课堂 Presentation</p>
      </div>
      <SlideImage src={slide.image} alt="山西地图视觉" />
    </section>
  );
}

function TocSlide({ slide }) {
  return (
    <section className="presentation-slide presentation-slide-toc">
      <SlideImage src={slide.image} alt="山西地点地图" />
      <div className="presentation-toc-list" aria-label="目录">
        <p className="presentation-kicker">Contents</p>
        <h2>六个现场</h2>
        <ol>
          {slide.places.map((place) => (
            <li key={place.id}>
              <span>{place.order}</span>
              <strong>{place.name}</strong>
              <small>{place.city}</small>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function PlaceCoverSlide({ place }) {
  return (
    <section className="presentation-slide presentation-slide-place-cover">
      <div className="presentation-place-copy">
        <p className="presentation-kicker">{place.order} / {place.eyebrow}</p>
        <h2>{place.name}</h2>
        <p>{place.summary}</p>
        <div className="presentation-tags">
          {place.tags.slice(0, 3).map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      <SlideImage src={place.visuals.cover} alt={`${place.name}线稿`} />
    </section>
  );
}

function ImageSlide({ place }) {
  return (
    <section className="presentation-slide presentation-slide-image">
      <div className="presentation-side-label">
        <p className="presentation-kicker">{place.order}</p>
        <h2>{place.name}</h2>
      </div>
      <SlideImage src={place.visuals.main} alt={`${place.name}主视觉`} mode="cover" />
    </section>
  );
}

function QuestionSlide({ place }) {
  return (
    <section className="presentation-slide presentation-slide-question">
      <SlideImage src={place.visuals.main} alt={`${place.name}观察图`} mode="cover" />
      <div className="presentation-question-copy">
        <p className="presentation-kicker">{place.name}</p>
        <h2>观察问题</h2>
        <p>{place.question}</p>
      </div>
    </section>
  );
}

function EndingSlide({ slide }) {
  return (
    <section className="presentation-slide presentation-slide-ending">
      <SlideImage src={slide.image} alt="云冈石窟线稿" />
      <div className="presentation-title-block">
        <p className="presentation-kicker">End</p>
        <h2>把现场带回图纸</h2>
        <p>看结构，看尺度，看人的痕迹。</p>
      </div>
    </section>
  );
}

function Slide({ slide }) {
  if (slide.type === "cover") return <CoverSlide slide={slide} />;
  if (slide.type === "toc") return <TocSlide slide={slide} />;
  if (slide.type === "place-cover") return <PlaceCoverSlide place={slide.place} />;
  if (slide.type === "image") return <ImageSlide place={slide.place} />;
  if (slide.type === "question") return <QuestionSlide place={slide.place} />;
  return <EndingSlide slide={slide} />;
}

export default function Presentation() {
  const slides = useMemo(() => makeSlides(makePlaceSlideData()), []);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "ArrowRight") {
        setActiveIndex((index) => Math.min(index + 1, slides.length - 1));
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((index) => Math.max(index - 1, 0));
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [slides.length]);

  return (
    <main className="presentation-root" aria-label="课堂 Presentation">
      <div className="presentation-stage">
        <Slide slide={activeSlide} />
      </div>
      <nav className="presentation-controls" aria-label="幻灯片切换">
        <button
          type="button"
          onClick={() => setActiveIndex((index) => Math.max(index - 1, 0))}
          disabled={activeIndex === 0}
          aria-label="上一页"
        >
          ←
        </button>
        <span>{activeIndex + 1} / {slides.length}</span>
        <button
          type="button"
          onClick={() => setActiveIndex((index) => Math.min(index + 1, slides.length - 1))}
          disabled={activeIndex === slides.length - 1}
          aria-label="下一页"
        >
          →
        </button>
      </nav>
    </main>
  );
}
