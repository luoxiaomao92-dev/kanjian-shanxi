import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import DynastyMapSlider from "../components/DynastyMapSlider.jsx";
import MapHero from "../components/MapHero.jsx";
import PlaceCard from "../components/PlaceCard.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import places from "../data/places.json";
import themes from "../data/themes.json";
import { resolveHashRoute } from "../utils/paths.js";
import beiweiStoryCover from "../../看见山西项目素材/04知识图/北魏前夜/封面.png";

export default function Home() {
  return (
    <div className="app-shell" id="top">
      <Header />
      <main>
        <MapHero />

        <section className="content-section place-explorer" id="places">
          <SectionTitle kicker="Explore" title="地点探索区">
            <p>横向浏览山西古建、石窟与雕塑现场，从一张卡片进入一个观察主题。</p>
          </SectionTitle>
          <div className="place-carousel" aria-label="地点探索横向滑动卡片">
            {places.map((place) => (
              <PlaceCard key={place.id} place={place} />
            ))}
          </div>
        </section>

        <section className="content-section" id="themes">
          <SectionTitle kicker="NORTHERN WEI STORY" title="北魏历史漫画">
            <p>
              从草原到平城，
              <br />
              从一个游牧部落，
              <br />
              到中国历史上最重要的文明融合。
            </p>
          </SectionTitle>
          <div className="theme-grid" style={{ display: "flex", justifyContent: "center" }}>
            {themes.map((theme, index) => (
              <div key={theme.id} style={{ width: "clamp(320px, 52%, 560px)", maxWidth: "100%" }}>
                <article className="theme-card theme-story-card">
                  <a href={resolveHashRoute(theme.href)} aria-label={`进入${theme.title}`}>
                    <div className="theme-mark">{String(index + 1).padStart(2, "0")}</div>
                    <img
                      src={beiweiStoryCover}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      style={{ height: 220, objectFit: "cover", padding: 0 }}
                    />
                    <h3>{theme.title}</h3>
                    <p>{theme.summary}</p>
                    <span className="card-link">{theme.cta}</span>
                  </a>
                </article>
              </div>
            ))}
          </div>
        </section>

        <DynastyMapSlider />
      </main>
      <Footer />
    </div>
  );
}
