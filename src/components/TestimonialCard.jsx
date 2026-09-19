import IconCircle from "./IconCircle";
function TestimonialCard({ text, icon, name, role }) {
  return (
    <div className="testimonial-card bg-white py-3 px-4 rounded-3 d-flex flex-column h-100">
      <p>{text}</p>
      <div className="d-flex align-items-center gap-3 mt-auto">
        <IconCircle>
          <span className="avatar">{icon}</span>
        </IconCircle>
        <div>
          <h6 className="mb-0">{name}</h6>
          <span className="fs-14">{role}</span>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
