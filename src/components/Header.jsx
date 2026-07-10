import { resolveAssetPath, resolveHashRoute, resolveHomeSectionRoute } from "../utils/paths.js";

export default function Header() {
  return (
    <header className="site-header">
      <a className="brand" href={resolveHashRoute("/")} aria-label="回到首页">
        <img src={resolveAssetPath("/assets/logo/yunduotian-logo.png")} alt="云朵田" />
      </a>
      <nav className="top-nav" aria-label="首页导航">
        <a href={resolveHomeSectionRoute("map")}>概览</a>
        <a href={resolveHomeSectionRoute("places")}>地点</a>
        <a href={resolveHashRoute("/beiwei-story")}>北魏漫画</a>
      </nav>
    </header>
  );
}
