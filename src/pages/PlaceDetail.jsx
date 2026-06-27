import { useEffect, useMemo, useState } from "react";
import SectionTitle from "../components/SectionTitle.jsx";

function DetailHeader({ detail }) {
  return (
    <header className="site-header detail-site-header">
      <a className="brand" href="/" aria-label="回到首页">
        <img src="/assets/logo/yunduotian-logo.png" alt="云朵田" />
      </a>
      <nav className="top-nav detail-top-nav" aria-label={`${detail.name}详情页导航`}>
        <a href="#overview">概览</a>
        <a href="#feature">视觉框架</a>
      </nav>
    </header>
  );
}

function DetailHero({ detail }) {
  return (
    <section className="detail-hero-section" id="overview">
      <div className="detail-hero-copy">
        <p className="eyebrow">{detail.eyebrow}</p>
        <h1>{detail.name}</h1>
        <p className="lead">{detail.summary.split("\n").map((line) => <span key={line}>{line}</span>)}</p>
        <p className="detail-intro">{detail.intro}</p>
        <a className="detail-back-link" href="/#places">
          返回地点探索区
        </a>
      </div>
    </section>
  );
}

function QuickFacts({ facts }) {
  return (
    <section className="detail-facts" aria-label="详情页基础信息">
      {facts.map(([label, value]) => (
        <div className="detail-fact" key={label}>
          <span>{label}</span>
          <strong>{value}</strong>
        </div>
      ))}
    </section>
  );
}

function DetailNote({ note }) {
  const highlightTerms = ["袒右肩式袈裟", "褒衣博带式袈裟", "升起"];
  const [mainText, remarkText] = note.split("备注：");

  const renderText = (text) => {
    const pattern = new RegExp(`(${highlightTerms.join("|")})`, "g");
    return text.split(pattern).map((part, index) =>
      highlightTerms.includes(part) ? (
        <strong className="detail-note-highlight" key={`${part}-${index}`}>
          {part}
        </strong>
      ) : (
        part
      )
    );
  };

  return (
    <p>
      {renderText(mainText)}
      {remarkText ? <span className="detail-note-remark">备注：{renderText(remarkText)}</span> : null}
    </p>
  );
}

function MapFeature({ feature }) {
  const [activeTitle, setActiveTitle] = useState(null);
  const [lightboxTitle, setLightboxTitle] = useState(null);
  const [fullscreenTitle, setFullscreenTitle] = useState(null);
  const [activeDevaName, setActiveDevaName] = useState(null);
  const [showDevaGrid, setShowDevaGrid] = useState(true);
  const [showGuideGrid, setShowGuideGrid] = useState(Boolean(feature.guideGrid));
  const [popoverImageShape, setPopoverImageShape] = useState("neutral");
  const guideTicks = useMemo(() => {
    const step = feature.guideStep ?? 10;
    return Array.from({ length: Math.floor(100 / step) + 1 }, (_, index) => index * step);
  }, [feature.guideStep]);
  const activePoint = useMemo(
    () => feature.points.find((point) => point.title === activeTitle),
    [activeTitle, feature.points]
  );
  const lightboxPoint = useMemo(
    () => feature.points.find((point) => point.title === lightboxTitle),
    [lightboxTitle, feature.points]
  );
  const fullscreenPoint = useMemo(
    () => feature.points.find((point) => point.title === fullscreenTitle),
    [fullscreenTitle, feature.points]
  );
  const activeDeva = useMemo(() => {
    const devas = fullscreenPoint?.devas ?? [];
    return devas.find((deva) => deva.name === activeDevaName) ?? devas[0];
  }, [activeDevaName, fullscreenPoint]);
  const devaGridTicks = useMemo(() => Array.from({ length: 21 }, (_, index) => index * 5), []);
  const useLightbox = feature.displayMode === "lightbox";
  const useModal = feature.displayMode === "modal";
  const needsPhotoSlot = activePoint?.kind === "photo";
  const activeImages = activePoint?.images ?? (activePoint?.image ? [activePoint.image] : []);
  const placePopoverNearPoint = feature.popoverPlacement === "point";
  const popoverStyle = useMemo(() => {
    if (!placePopoverNearPoint || !activePoint) {
      return undefined;
    }

    const shouldOpenLeft = activeImages.length > 1 ? activePoint.x > 36 : activePoint.x > 65;
    const shouldOpenBelow = activePoint.y < 38;
    const x = shouldOpenLeft ? Math.max(activePoint.x - 2, 12) : Math.min(activePoint.x + 2, 88);
    const y = shouldOpenBelow ? Math.min(activePoint.y + 7, 82) : Math.min(Math.max(activePoint.y, 10), 88);
    const xTransform = shouldOpenLeft ? "-100%" : "0";
    const yTransform = shouldOpenBelow ? "14px" : "calc(-100% - 14px)";

    return {
      left: `${x}%`,
      top: `${y}%`,
      right: "auto",
      transform: `translate(${xTransform}, ${yTransform})`
    };
  }, [activeImages.length, activePoint, placePopoverNearPoint]);

  useEffect(() => {
    setPopoverImageShape("neutral");
  }, [activeTitle]);

  useEffect(() => {
    setActiveDevaName(fullscreenPoint?.devas?.[0]?.name ?? null);
  }, [fullscreenPoint]);

  return (
    <div className="detail-feature-grid detail-feature-grid-full">
      <div
        className={`detail-map-frame ${feature.mapLayout === "wide" ? "detail-map-frame-wide" : ""} ${
          feature.fitToImage ? "detail-map-frame-fit" : ""
        }`}
        style={feature.mapAspectRatio ? { aspectRatio: feature.mapAspectRatio } : undefined}
        onClick={(event) => {
          if (
            !useLightbox &&
            activePoint &&
            !event.target.closest(".detail-map-point, .detail-map-popover, .detail-grid-toggle")
          ) {
            setActiveTitle(null);
          }
        }}
      >
        <img src={feature.image} alt={feature.imageAlt} />
        {feature.guideGrid ? (
          <>
            <button
              className={`detail-grid-toggle ${showGuideGrid ? "is-active" : ""}`}
              type="button"
              onClick={() => setShowGuideGrid((value) => !value)}
            >
              网格
            </button>
            {showGuideGrid ? (
              <div className="detail-coordinate-grid" aria-hidden="true">
                {guideTicks.map((tick) => (
                  <span className="detail-grid-line detail-grid-line-x" key={`x-${tick}`} style={{ left: `${tick}%` }} />
                ))}
                {guideTicks.map((tick) => (
                  <span className="detail-grid-line detail-grid-line-y" key={`y-${tick}`} style={{ top: `${tick}%` }} />
                ))}
                {guideTicks.map((tick) => (
                  <span className="detail-grid-label detail-grid-label-x" key={`x-label-${tick}`} style={{ left: `${tick}%` }}>
                    x{tick}
                  </span>
                ))}
                {guideTicks.map((tick) => (
                  <span className="detail-grid-label detail-grid-label-y" key={`y-label-${tick}`} style={{ top: `${tick}%` }}>
                    y{tick}
                  </span>
                ))}
              </div>
            ) : null}
          </>
        ) : null}
        {feature.points.map((point) =>
          typeof point.leaderToY === "number" && point.leaderToY >= point.y ? (
            <span
              className="detail-map-leader-line"
              key={`${point.title}-leader-line`}
              style={{
                left: `${point.x}%`,
                top: `${point.y}%`,
                height: `${point.leaderToY - point.y}%`
              }}
              aria-hidden="true"
            />
          ) : null
        )}
        {feature.points.map((point) => (
          <button
            className={`detail-map-point ${point.kind === "photo" ? "detail-map-photo-point" : ""} ${
              activePoint?.title === point.title ? "is-active" : ""
            }`}
            key={point.title}
            title={`${point.title} x:${point.x} y:${point.y}`}
            style={{
              left: `${point.x}%`,
              top: `${point.y}%`,
              ...(point.anchor === "bottom" ? { transform: "translate(-50%, -100%)" } : {}),
              ...(point.width ? { width: `${point.width}%` } : {}),
              ...(point.height ? { height: `${point.height}%` } : {})
            }}
            type="button"
            onClick={() => {
              if (point.fullscreen) {
                setFullscreenTitle(point.title);
                setActiveTitle(null);
                return;
              }
              setActiveTitle(point.title);
              if (useLightbox) {
                setLightboxTitle(point.title);
              }
            }}
          >
            {point.label ?? point.title}
          </button>
        ))}
        {!useLightbox && !useModal && activePoint ? (
          <aside
            className={`detail-map-popover detail-map-popover-${popoverImageShape} ${
              activeImages.length > 1 ? "detail-map-popover-gallery" : ""
            }`}
            aria-live="polite"
          >
            <div className="detail-map-popover-panel">
              <button className="detail-map-popover-close" type="button" onClick={() => setActiveTitle(null)}>
                关闭
              </button>
              {activeImages.length > 1 ? (
                <div className="detail-map-photo-strip" aria-label={`${activePoint.title}照片组`}>
                  {activeImages.map((image, index) => (
                    <figure className="detail-map-photo-tile" key={image}>
                      <span>{index + 1}</span>
                      <img src={image} alt={`${activePoint.title}观察参考 ${index + 1}`} />
                    </figure>
                  ))}
                </div>
              ) : activePoint.image ? (
                <img
                  src={activePoint.image}
                  alt={`${activePoint.title}观察参考`}
                  onLoad={(event) => {
                    const { naturalWidth, naturalHeight } = event.currentTarget;
                    const ratio = naturalWidth / naturalHeight;
                    setPopoverImageShape(ratio > 1.15 ? "landscape" : ratio < 0.85 ? "portrait" : "square");
                  }}
                />
              ) : needsPhotoSlot ? (
                <div className="detail-photo-empty">照片待补充</div>
              ) : null}
              <span className="city-label">{activePoint.type ?? "当前节点"}</span>
              <h3>{activePoint.title}</h3>
              <DetailNote note={activePoint.note} />
            </div>
          </aside>
        ) : null}
      </div>
      {feature.bottomSpacer ? (
        <div className="detail-map-bottom-spacer" style={{ minHeight: feature.bottomSpacer }} aria-hidden="true" />
      ) : null}
      {useModal && activePoint ? (
        <div
          className="detail-map-modal"
          role="dialog"
          aria-modal="true"
          aria-label={activePoint.title}
          onClick={() => setActiveTitle(null)}
        >
          <div className="detail-map-modal-panel" onClick={(event) => event.stopPropagation()}>
            <button className="detail-map-modal-close" type="button" onClick={() => setActiveTitle(null)}>
              关闭
            </button>
            {activeImages.length > 1 ? (
              <div className="detail-map-modal-gallery" aria-label={`${activePoint.title}照片组`}>
                {activeImages.map((image, index) => (
                  <figure className="detail-map-modal-figure" key={image}>
                    <span>{index + 1}</span>
                    <img className="detail-map-modal-image" src={image} alt={`${activePoint.title}观察参考 ${index + 1}`} />
                  </figure>
                ))}
              </div>
            ) : activePoint.image ? (
              <img className="detail-map-modal-image" src={activePoint.image} alt={`${activePoint.title}观察参考`} />
            ) : needsPhotoSlot ? (
              <div className="detail-photo-empty">照片待补充</div>
            ) : null}
            <span className="city-label">{activePoint.type ?? "当前节点"}</span>
            <h3>{activePoint.title}</h3>
            <DetailNote note={activePoint.note} />
          </div>
        </div>
      ) : null}
      {useLightbox && lightboxPoint ? (
        <div
          className="detail-lightbox-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label={lightboxPoint.title}
          onClick={() => setLightboxTitle(null)}
        >
          <div className="detail-lightbox-panel" onClick={(event) => event.stopPropagation()}>
            <button className="detail-lightbox-close" type="button" onClick={() => setLightboxTitle(null)}>
              关闭
            </button>
            {lightboxPoint.image ? (
              <img src={lightboxPoint.image} alt={`${lightboxPoint.title}放大照片`} />
            ) : (
              <div className="detail-photo-empty">照片待补充</div>
            )}
            <span className="city-label">{lightboxPoint.type}</span>
            <h3>{lightboxPoint.title}</h3>
            <DetailNote note={lightboxPoint.note} />
          </div>
        </div>
      ) : null}
      {fullscreenPoint ? (
        <div
          className="detail-deva-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={fullscreenPoint.title}
          onClick={() => setFullscreenTitle(null)}
        >
          <div className="detail-deva-header" onClick={(event) => event.stopPropagation()}>
            <div>
              <span className="city-label">{fullscreenPoint.type}</span>
              <h3>{fullscreenPoint.title}</h3>
            </div>
            <button className="detail-deva-close" type="button" onClick={() => setFullscreenTitle(null)}>
              关闭
            </button>
          </div>
          <div className="detail-deva-stage" onClick={(event) => event.stopPropagation()}>
            <div
              className="detail-deva-map-shell"
              style={{ aspectRatio: fullscreenPoint.fullscreenAspectRatio ?? "1547 / 1016" }}
            >
              <img className="detail-deva-plan" src={fullscreenPoint.image} alt={`${fullscreenPoint.title}站位图`} />
              <button
                className={`detail-deva-grid-toggle ${showDevaGrid ? "is-active" : ""}`}
                type="button"
                onClick={() => setShowDevaGrid((value) => !value)}
              >
                5单位网格
              </button>
              {showDevaGrid ? (
                <div className="detail-deva-grid" aria-hidden="true">
                  {devaGridTicks.map((tick) => (
                    <span className="detail-deva-grid-line detail-deva-grid-line-x" key={`deva-x-${tick}`} style={{ left: `${tick}%` }} />
                  ))}
                  {devaGridTicks.map((tick) => (
                    <span className="detail-deva-grid-line detail-deva-grid-line-y" key={`deva-y-${tick}`} style={{ top: `${tick}%` }} />
                  ))}
                  {devaGridTicks.map((tick) => (
                    <span className="detail-deva-grid-label detail-deva-grid-label-x" key={`deva-x-label-${tick}`} style={{ left: `${tick}%` }}>
                      x{tick}
                    </span>
                  ))}
                  {devaGridTicks.map((tick) => (
                    <span className="detail-deva-grid-label detail-deva-grid-label-y" key={`deva-y-label-${tick}`} style={{ top: `${tick}%` }}>
                      y{tick}
                    </span>
                  ))}
                </div>
              ) : null}
              {fullscreenPoint.devas?.map((deva) => (
                <button
                  className={`detail-deva-pin ${activeDeva?.name === deva.name ? "is-active" : ""}`}
                  key={deva.name}
                  style={{ left: `${deva.x}%`, top: `${deva.y}%` }}
                  title={`${deva.name}，${deva.station}`}
                  type="button"
                  onFocus={() => setActiveDevaName(deva.name)}
                  onMouseEnter={() => setActiveDevaName(deva.name)}
                  onClick={() => setActiveDevaName(deva.name)}
                >
                  <img src={deva.image} alt="" />
                  <span>{deva.name}</span>
                </button>
              ))}
            </div>
            {activeDeva ? (
              <aside className="detail-deva-card" aria-live="polite">
                <img src={activeDeva.image} alt={`${activeDeva.name}水彩人物`} />
                <span className="city-label">{activeDeva.station}</span>
                <h4>{activeDeva.name}</h4>
                <p>{activeDeva.note ?? "将鼠标移到站位图上的圆形头像，或点击头像，就可以查看对应的水彩形象。"}</p>
              </aside>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}

function TimelineFeature({ feature }) {
  const [activeTitle, setActiveTitle] = useState(feature.points[0]?.title);
  const activePoint = useMemo(
    () => feature.points.find((point) => point.title === activeTitle) ?? feature.points[0],
    [activeTitle, feature.points]
  );

  return (
    <div className="detail-timeline-stack">
      {feature.images.map((image) => (
        <div className="detail-scroll-image" key={image.src}>
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
      {feature.hidePoints ? null : (
        <>
          <div className="detail-timeline-points" aria-label="时间线节点">
            {feature.points.map((point) => (
              <button
                className={activePoint.title === point.title ? "is-active" : ""}
                key={point.title}
                type="button"
                onClick={() => setActiveTitle(point.title)}
              >
                <span>{point.time}</span>
                {point.title}
              </button>
            ))}
          </div>
          <aside className="detail-side-panel detail-timeline-note">
            <span className="city-label">{activePoint.time}</span>
            <h3>{activePoint.title}</h3>
            <p>{activePoint.note}</p>
          </aside>
        </>
      )}
    </div>
  );
}

function DetailFeature({ detail }) {
  const { feature } = detail;
  const isMapFeature = feature.type === "map";

  return (
    <section
      className={`content-section detail-feature-section ${isMapFeature ? "detail-feature-visual" : ""}`}
      id="feature"
      aria-label={feature.title}
    >
      {isMapFeature ? null : (
        <SectionTitle kicker="Framework" title={feature.title}>
          <p>{feature.summary}</p>
        </SectionTitle>
      )}
      {isMapFeature ? <MapFeature feature={feature} /> : <TimelineFeature feature={feature} />}
    </section>
  );
}

export default function PlaceDetail({ detail }) {
  useEffect(() => {
    document.title = `${detail.name}｜看见山西`;
  }, [detail.name]);

  return (
    <div className={`app-shell detail-shell detail-${detail.accent} detail-${detail.id}`} id="top">
      <DetailHeader detail={detail} />
      <main>
        <DetailHero detail={detail} />
        <DetailFeature detail={detail} />
        {detail.hideQuickFacts ? null : <QuickFacts facts={detail.quickFacts} />}
      </main>
    </div>
  );
}
