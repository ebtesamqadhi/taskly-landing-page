import { Check } from "lucide-react";
import Button from "./Button";
function PricingCard({
  plan,
  description,
  price,
  period,
  features,
  buttonVariant,
}) {
  return (
    <div className="pricing-card py-3 px-4 rounded-3 d-flex flex-column h-100">
      <h6 className="fw-bold">{plan}</h6>
      <p className="mb-1">{description}</p>
      <h3 className="fw-bold">
        {price} <span className="period fs-14">/{period}</span>
      </h3>
      <ul className="list-unstyled">
        {features.map((feature) => (
          <li key={feature}>
            <span className="d-flex align-items-center gap-2">
              <Check color="var(--color-primary)" size={18} strokeWidth={3} />
              {feature}
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-auto text-center">
        <Button variant={buttonVariant} className="w-100 fw-bold fs-6">
          Get Started
        </Button>
      </div>
    </div>
  );
}
export default PricingCard;
