import StatItem from "../components/StatItem";
function Stats() {
  return (
    <section className="stats-section py-4 mt-3">
      <div className="container">
        <div className="stats-list d-flex">
          <StatItem number={50} suffix="K+" text="Active users" />
          <StatItem number={200} suffix="+" text="Teams onboarded" />
          <StatItem number={98} suffix="%" text="Customer satisfaction" />
        </div>
      </div>
    </section>
  );
}

export default Stats;
