export default function MapHero() {
  return (
    <section className="map-hero" id="map" aria-labelledby="map-title">
      <img className="hero-map-watermark" src="/assets/maps/shanxi-map-visual.svg" alt="" />
      <div className="map-copy">
        <p className="eyebrow">艺术手册 + 建筑考察笔记</p>
        <h1 id="map-title">看见山西：古建与石窟</h1>
        <p className="lead">看建筑、看石窟、看雕塑，看千百年来的变与不变。</p>
        <div className="hero-actions" aria-label="首页辅助入口">
          <a href="#places">探索地点</a>
          <a href="#themes">看懂元素</a>
        </div>
      </div>
    </section>
  );
}
