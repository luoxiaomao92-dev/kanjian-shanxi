import SketchFrame from "./SketchFrame.jsx";
import Tag from "./Tag.jsx";
import placeDetails from "../data/placeDetails.js";

export default function PlaceCard({ place }) {
  const href = placeDetails[place.id]?.path ?? `/place-detail.html?place=${place.id}`;

  return (
    <article className="place-card">
      <a href={href} aria-label={`进入${place.name}详情页`}>
        <SketchFrame place={place} compact />
        <div className="place-card-body">
          <span className="city-label">{place.city}</span>
          <h3>{place.name}</h3>
          <p>{place.summary}</p>
          <div className="tag-list">
            {place.tags.map((tag) => (
              <Tag key={tag} tone={place.accent}>
                {tag}
              </Tag>
            ))}
          </div>
          <span className="card-link">进入地点</span>
        </div>
      </a>
    </article>
  );
}
