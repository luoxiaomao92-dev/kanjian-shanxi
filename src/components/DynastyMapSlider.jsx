import { useEffect, useRef, useState } from "react";
import dynastyMaps from "../data/dynastyMaps.js";

const MAP_ASPECT_RATIO = 2598 / 2479;

export default function DynastyMapSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });
  const mapFrameRef = useRef(null);
  const activeMap = dynastyMaps[activeIndex] ?? dynastyMaps[0];
  const activeProgress = `${(activeIndex / (dynastyMaps.length - 1)) * 100}%`;
  const activeThumb = `${10 + activeIndex * 20}%`;

  useEffect(() => {
    const mapFrame = mapFrameRef.current;

    if (!mapFrame) {
      return undefined;
    }

    function updateCanvasSize() {
      const frameStyles = window.getComputedStyle(mapFrame);
      const contentWidth =
        mapFrame.clientWidth - parseFloat(frameStyles.paddingLeft) - parseFloat(frameStyles.paddingRight);
      const contentHeight =
        mapFrame.clientHeight - parseFloat(frameStyles.paddingTop) - parseFloat(frameStyles.paddingBottom);
      const width = Math.min(contentWidth, contentHeight * MAP_ASPECT_RATIO);
      const height = width / MAP_ASPECT_RATIO;

      setCanvasSize((currentSize) => {
        if (Math.abs(currentSize.width - width) < 0.5 && Math.abs(currentSize.height - height) < 0.5) {
          return currentSize;
        }

        return { width, height };
      });
    }

    updateCanvasSize();

    const resizeObserver = new ResizeObserver(updateCanvasSize);
    resizeObserver.observe(mapFrame);
    window.addEventListener("resize", updateCanvasSize);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateCanvasSize);
    };
  }, []);

  function setActiveDynasty(index) {
    setActiveIndex((currentIndex) => (currentIndex === index ? currentIndex : index));
  }

  function handleTimelinePointerMove(event) {
    if (event.pointerType !== "mouse") {
      return;
    }

    const timelineRect = event.currentTarget.getBoundingClientRect();
    const isVertical = timelineRect.height > timelineRect.width;
    const pointerPosition = isVertical ? event.clientY - timelineRect.top : event.clientX - timelineRect.left;
    const timelineLength = isVertical ? timelineRect.height : timelineRect.width;
    const pointerRatio = pointerPosition / timelineLength;
    const nextIndex = Math.min(
      dynastyMaps.length - 1,
      Math.max(0, Math.floor(pointerRatio * dynastyMaps.length)),
    );

    setActiveDynasty(nextIndex);
  }

  return (
    <section className="content-section dynasty-map-section" aria-labelledby="dynasty-map-title">
      <div className="section-title">
        <p>Timeline</p>
        <h2 id="dynasty-map-title">站在历史十字路口的山西</h2>
        <div>
          <p>地图不是为了背疆域，而是看看同一个山西，在不同时代会站在怎样的边界和空间里。</p>
        </div>
      </div>

      <div className="dynasty-map-shell">
        <div className="dynasty-map-board" aria-live="polite">
          <div className="dynasty-map-stage">
            <div className="dynasty-map-frame" ref={mapFrameRef}>
              <div
                className="dynasty-map-canvas"
                style={
                  canvasSize.width > 0
                    ? { width: `${canvasSize.width}px`, height: `${canvasSize.height}px` }
                    : undefined
                }
              >
                {dynastyMaps.map((item) => (
                  <img
                    key={item.id}
                    className={`dynasty-map-image ${item.id === activeMap.id ? "is-active" : ""}`}
                    src={item.image}
                    alt={item.id === activeMap.id ? item.alt : ""}
                    aria-hidden={item.id === activeMap.id ? "false" : "true"}
                    loading="lazy"
                    decoding="async"
                  />
                ))}
                <img
                  className="dynasty-shanxi-highlight"
                  src="/assets/maps/dynasty/shanxi-highlight.png"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                />
                <span className="dynasty-shanxi-label">山西</span>
              </div>

              <div className="dynasty-map-note" aria-label={`${activeMap.dynasty}说明`}>
                <span>{activeMap.dynasty}</span>
                <p>{activeMap.note}</p>
              </div>
            </div>
          </div>

          <div className="dynasty-time-controls" aria-label="朝代时间轴">
            <div
              className="dynasty-timeline"
              onPointerMove={handleTimelinePointerMove}
              style={{ "--active-progress": activeProgress, "--active-thumb": activeThumb }}
            >
              <div className="dynasty-timeline-line" aria-hidden="true">
                <span />
              </div>
              <span className="dynasty-timeline-thumb" aria-hidden="true" />
              <div className="dynasty-time-segments" role="tablist" aria-label="选择朝代时间段">
                {dynastyMaps.map((item, index) => (
                  <button
                    key={item.id}
                    className={`dynasty-time-segment ${index === activeIndex ? "is-active" : ""}`}
                    type="button"
                    role="tab"
                    aria-selected={index === activeIndex}
                    onClick={() => setActiveDynasty(index)}
                    onFocus={() => setActiveDynasty(index)}
                    onMouseEnter={() => setActiveDynasty(index)}
                  >
                    <span className="dynasty-time-dot" aria-hidden="true" />
                    <span className="dynasty-time-name">{item.dynasty}</span>
                    <span className="dynasty-time-period">{item.period}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
