import SectionTitle from "../components/SectionTitle";
import acmeimg from "../assets/images/acme.webp";
import globex from "../assets/images/globex.webp";
import nextgen from "../assets/images/nextgen.webp";
import vertex from "../assets/images/vertex.webp";
import lumen from "../assets/images/lumen.webp";
import orbit from "../assets/images/orbit.webp";

function TrustedTeams() {
  return (
    <section className="trustedteam-section py-3">
      <div className="container">
        <SectionTitle title="trusted by team at" />
        <div className="row text-center g-2">
          <div className="col-6 col-md-4 col-lg-2">
            <img src={acmeimg} alt="" />
          </div>

          <div className="col-6 col-md-4 col-lg-2">
            <img src={globex} alt="" />
          </div>

          <div className="col-6 col-md-4 col-lg-2">
            <img src={nextgen} alt="" />
          </div>

          <div className="col-6 col-md-4 col-lg-2">
            <img src={vertex} alt="" />
          </div>

          <div className="col-6 col-md-4 col-lg-2">
            <img src={lumen} alt="" />
          </div>

          <div className="col-6 col-md-4 col-lg-2">
            <img src={orbit} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustedTeams;
