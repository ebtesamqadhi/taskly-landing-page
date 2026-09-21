import HeroImg from "../assets/images/hero-img.png";
import { Check } from "lucide-react";
function Hero() {
  return (
    <section className="hero py-4" id="home">
      <div className="container">
        <div className="row align-items-center  gy-5 gap-lg-0 gx-lg-4">
          <div className="hero-content col-lg-6">
            <p className="fs-14 fw-semibold">
              A SMARTER WAY TO GET THINGS DONE
            </p>
            <h1 className="mb-3">
              Organize your work. <br />
              Simplify your day.
            </h1>

            <p>
              Taskly helps you plan, track, and complete your tasks so you can
              focus on what matters most.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 mt-3">
              <button className="btn custom-btn custom-btn-primary fs-14 fw-bold">
                Start for free
              </button>
              <button className="btn custom-btn hero-btn fs-14 fw-bold">
                See how it works
              </button>
            </div>
            <div>
              <div className="d-flex flex-wrap gap-4 mt-4">
                <span className="d-flex align-items-center gap-1 text-nowrap">
                  <Check
                    color="var(--color-primary)"
                    size={18}
                    strokeWidth={3}
                  />
                  Free to Start
                </span>
                <span className="d-flex align-items-center gap-1 text-nowrap">
                  <Check
                    color="var(--color-primary)"
                    size={18}
                    strokeWidth={3}
                  />
                  No credit card
                </span>
                <span className="d-flex align-items-center gap-1 text-nowrap">
                  <Check
                    color="var(--color-primary)"
                    size={18}
                    strokeWidth={3}
                  />
                  Loved by teams
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <img src={HeroImg} alt="" className="hero-img img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
