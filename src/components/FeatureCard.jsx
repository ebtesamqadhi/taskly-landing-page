import IconCircle from "./IconCircle";
function FeatureCard({ icon, title, description, iconClass }) {
  return (
    <div className="feature-card bg-white py-3 px-4 rounded-3">
      <IconCircle className={iconClass}>{icon}</IconCircle>
      <h5 className="">{title}</h5>
      <p className="mb-0 fs-14">{description}</p>
    </div>
  );
}
export default FeatureCard;
