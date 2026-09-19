import SectionTitle from "../components/SectionTitle";
import TestimonialCard from "../components/TestimonialCard";
function Testimonials() {
  const testimonials = [
    {
      text: "“Taskly has completely changed the way our team works. It’s simple, powerful, and a joy to use.”",
      icon: "SC",
      name: "Sarah Chen",
      role: "Product Manager, Acme",
    },
    {
      text: "“We’ve tried many tools, but Taskly strikes the perfect balance between features and ease of use.”",
      icon: "MJ",
      name: "Marcus Johnson",
      role: "CTO, NextGen",
    },
    {
      text: "“Taskly helps us stay aligned and get more done. Highly recommend it to any team!”",
      icon: "EP",
      name: "Emily Parker",
      role: "Team Lead, Lumen",
    },
  ];
  return (
    <section className="testimonials-section py-4">
      <div className="container">
        <SectionTitle
          title="testimonials"
          description="Loved by productive teams"
        />
        <div className="row g-3">
          {testimonials.map((item) => (
            <div className="col-12 col-md-4" key={item.name}>
              <TestimonialCard
                text={item.text}
                icon={item.icon}
                name={item.name}
                role={item.role}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Testimonials;
