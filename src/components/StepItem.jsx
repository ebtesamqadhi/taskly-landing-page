import IconCircle from "./IconCircle";
function StepItem({ number, title, description, className }) {
  return (
    <div className="step-item d-flex gap-3">
      <IconCircle className={className}>
        <span className="step-number">{number}</span>
      </IconCircle>
      <div>
        <h6 className="fw-bold mb-1">{title}</h6>
        <p className="mb-0 fs-14">{description}</p>
      </div>
    </div>
  );
}

export default StepItem;
