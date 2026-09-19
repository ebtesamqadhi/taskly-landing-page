import SectionTitle from "../components/SectionTitle";
import PricingCard from "../components/PricingCard";
function Pricing() {
  const plans = [
    {
      plan: "Free",
      description: "Perfect for individuals getting started.",
      price: "$0",
      period: "month",
      buttonVariant: "outline",
      features: [
        "Up to 5 projects",
        "Basic task management",
        "1 GB storage",
        "Community support",
      ],
    },
    {
      plan: "Pro",
      description: "For professionals who want to do more.",
      price: "$9",
      period: "month",
      buttonVariant: "primary",
      features: [
        "Unlimited projects",
        "Advanced task management",
        "10 GB storage",
        "Priority support",
        "Advanced analytics",
      ],
    },
  ];
  return (
    <section className="py-3">
      <div className="container">
        <SectionTitle
          title="pricing"
          description="Simple pricing for everyone"
        />
        <div className="row justify-content-center g-4">
          {plans.map((item) => (
            <div className="col-12 col-md-6 col-lg-4" key={item.plan}>
              <PricingCard
                plan={item.plan}
                description={item.description}
                price={item.price}
                period={item.period}
                features={item.features}
                buttonVariant={item.buttonVariant}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Pricing;
