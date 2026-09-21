import SectionTitle from "../components/SectionTitle";
import FeatureCard from "../components/FeatureCard";
import { List, ChartNoAxesColumnIncreasing, Users } from "lucide-react";

function Features() {
  return (
    <section className="features-section py-4" id="features">
      <div className="container">
        <SectionTitle
          title="features"
          description="Everything you need to stay focused"
        />
        <div className="row g-4">
          <div className="col-12 col-md-4">
            <FeatureCard
              icon={<List strokeWidth={3} size={28} />}
              title="Plan tasks"
              description="Quickly capture and organize your tasks in one place."
            />
          </div>
          <div className="col-12 col-md-4">
            <FeatureCard
              icon={<ChartNoAxesColumnIncreasing strokeWidth={3} size={28} />}
              iconClass="icon-circle-orange"
              title="Track progress"
              description="See what's done and what's next with clear visuals."
            />
          </div>
          <div className="col-12 col-md-4">
            <FeatureCard
              icon={<Users strokeWidth={3} size={28} />}
              title="Work together"
              description="Share tasks, assign work, and get more done as a team."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
