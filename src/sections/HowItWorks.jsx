import SectionTitle from "../components/SectionTitle";
import howitworks from "../assets/images/howitworks-img.webp";
import StepItem from "../components/StepItem";
function HowItWorks() {
  return (
    <section className="howitwork-section py-4">
      <div className="container">
        <SectionTitle
          title="how it works"
          description="Get started in three simple steps"
        />
        <div className="row align-items-center gy-4 gx-0 gx-lg-5">
          <div className="col-lg-7">
            <img
              src={howitworks}
              alt="Taskly dashboard"
              className="img-fluid"
            />
          </div>
          <div className="col-lg-5">
            <div className="d-flex flex-column gap-5">
              <StepItem
                number="1"
                className="step-circle"
                title="Create your tasks"
                description="Add what you need to do, in seconds."
              />
              <StepItem
                number="2"
                title="Organize and prioritize"
                description="Set due dates and focus on what’s important."
              />
              <StepItem
                number="3"
                title="Make progress"
                description="Check things off and achieve your goals."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
