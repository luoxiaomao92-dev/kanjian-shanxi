export default function SketchFrame({ place, compact = false }) {
  const hasImage = Boolean(place.sketch);

  return (
    <div className={`sketch-frame ${compact ? "sketch-frame-compact" : ""}`}>
      {hasImage ? (
        <img src={place.sketch} alt={`${place.name}线稿`} />
      ) : (
        <div className="sketch-placeholder" aria-hidden="true">
          <span>{place.name.slice(0, 2)}</span>
          <i />
          <b />
        </div>
      )}
      <div className={`corner-block corner-${place.accent}`} />
    </div>
  );
}
