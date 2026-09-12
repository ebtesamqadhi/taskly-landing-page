import logo from "../assets/logo.png";
import Button from "../components/Button";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="logo" className="navbar-logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link fs-14 active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-14" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-14" href="#">
                Reviews
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-14" href="#">
                Pricing
              </a>
            </li>
          </ul>
          <Button variant={"primary"}>Get Started</Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
