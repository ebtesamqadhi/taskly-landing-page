import logo from "../assets/images/logo.webp";

function Footer() {
  return (
    <footer className="footer py-2 text-center ">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-4 text-md-start">
            <a className="navbar-brand" href="#home">
              <img src={logo} alt="Taskly logo" className="navbar-logo" />
            </a>
          </div>

          <div className="col-12 col-md-4">
            <nav className="d-flex justify-content-center gap-4 fs-14">
              <a href="#home" className="nav-link">
                Home
              </a>
              <a href="#features" className="nav-link">
                Features
              </a>
              <a href="#reviews" className="nav-link">
                Reviews
              </a>
              <a href="#pricing" className="nav-link">
                Pricing
              </a>
            </nav>
          </div>

          <div className="col-12 col-md-4 text-md-end">
            <p className="mb-0 fs-14">© 2026 Taskly. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
