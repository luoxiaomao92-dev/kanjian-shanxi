import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { resolveHomeSectionRoute } from "../utils/paths.js";
import scene1 from "../../看见山西项目素材/04知识图/北魏前夜/第1幕.png";
import scene2 from "../../看见山西项目素材/04知识图/北魏前夜/第2幕.png";
import scene3 from "../../看见山西项目素材/04知识图/北魏前夜/第3幕.png";
import scene4 from "../../看见山西项目素材/04知识图/北魏前夜/第4幕.png";
import scene5 from "../../看见山西项目素材/04知识图/北魏前夜/第5幕.png";
import scene6 from "../../看见山西项目素材/04知识图/北魏前夜/第6幕.png";
import scene7 from "../../看见山西项目素材/04知识图/北魏前夜/第7幕.png";
import scene8 from "../../看见山西项目素材/04知识图/北魏前夜/第8幕.png";

const scenes = [scene1, scene2, scene3, scene4, scene5, scene6, scene7, scene8];

export default function BeiweiStory() {
  return (
    <div className="app-shell" id="top">
      <Header />
      <main>
        <section className="content-section" style={{ maxWidth: 980, margin: "0 auto" }}>
          <a
            href={resolveHomeSectionRoute("themes")}
            style={{
              display: "inline-flex",
              marginBottom: 32,
              color: "var(--muted)",
              fontSize: 13,
              fontWeight: 900,
              letterSpacing: "0.08em",
              textDecoration: "none",
              textTransform: "uppercase"
            }}
          >
            返回首页
          </a>
          <div style={{ marginBottom: 36 }}>
            <p className="section-kicker">NORTHERN WEI STORY</p>
            <h1 style={{ margin: "8px 0 0" }}>北魏历史漫画</h1>
          </div>
          <div style={{ display: "grid", gap: 28 }}>
            {scenes.map((scene, index) => (
              <figure
                key={scene}
                style={{
                  margin: 0,
                  border: "1px solid var(--hairline)",
                  background: "rgba(255, 255, 255, 0.58)"
                }}
              >
                <img
                  src={scene}
                  alt={`北魏历史漫画第${index + 1}幕`}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                  style={{ display: "block", width: "100%", height: "auto" }}
                />
              </figure>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
