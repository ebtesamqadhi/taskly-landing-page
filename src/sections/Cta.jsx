import Butoon from "../components/Button";
function Cta() {
  return (
    <section className="cta-section py-2 text-center">
      <h3 className="text-white">Organize your work. Simplify your day.</h3>
      <p className="text-white fs-14">
        Join thousands of productive teams using Taskly.
      </p>
      <Butoon className="cta-btn bg-white">Start for free</Butoon>
    </section>
  );
}

export default Cta;
