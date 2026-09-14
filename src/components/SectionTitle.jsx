function SectionTitle({ title, description }) {
  return (
    <div className="section-title">
      <span className="d-block mb-1">{title}</span>
      {description && <h2>{description}</h2>}
    </div>
  );
}
export default SectionTitle;
