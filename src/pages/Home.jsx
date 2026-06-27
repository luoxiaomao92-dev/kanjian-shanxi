import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import DynastyMapSlider from "../components/DynastyMapSlider.jsx";
import MapHero from "../components/MapHero.jsx";
import PlaceCard from "../components/PlaceCard.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import ThemeCard from "../components/ThemeCard.jsx";
import places from "../data/places.json";
import themes from "../data/themes.json";

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
          <SectionTitle kicker="Elements" title="看懂元素">
            <p>主题像手册里的索引页，帮助学生把现场细节放进更大的知识线索。</p>
          </SectionTitle>
          <div className="theme-grid">
            {themes.map((theme, index) => (
              <ThemeCard key={theme.id} theme={theme} index={index} />
            ))}
          </div>
        </section>

        <DynastyMapSlider />
      </main>
      <Footer />
    </div>
  );
}
