export default function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="回到首页">
        <img src="/assets/logo/yunduotian-logo.png" alt="云朵田" />
      </a>
      <nav className="top-nav" aria-label="首页导航">
        <a href="#map">概览</a>
        <a href="#places">地点</a>
        <a href="#themes">看懂元素</a>
      </nav>
    </header>
  );
}
