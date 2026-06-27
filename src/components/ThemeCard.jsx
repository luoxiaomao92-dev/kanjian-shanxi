export default function ThemeCard({ theme, index }) {
  return (
    <article className="theme-card">
      <div className="theme-mark">{String(index + 1).padStart(2, "0")}</div>
      {theme.image ? (
        <img src={theme.image} alt="" loading="lazy" decoding="async" />
      ) : (
        <div className="theme-placeholder" aria-hidden="true" />
      )}
      <h3>{theme.title}</h3>
      <p>{theme.summary}</p>
    </article>
  );
}
