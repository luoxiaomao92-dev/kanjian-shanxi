export default function SectionTitle({ kicker, title, children }) {
  return (
    <div className="section-title">
      {kicker ? <p>{kicker}</p> : null}
      <h2>{title}</h2>
      {children ? <div>{children}</div> : null}
    </div>
  );
}
