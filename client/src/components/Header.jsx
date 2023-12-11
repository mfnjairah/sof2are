import "../styles/Header.css";

const Header = () => {
  const links = [
    "Services",
    "Industries",
    "Clients",
    "Company",
    "Get in Touch",
  ];
  return (
    <header>
      <div className="container">
        <div className="navigation">
          <div>
            <h3>
              <a href="/">Sof2are</a>
            </h3>
          </div>

          <ul>
            {links.map((link) => (
              <li>
                <a
                  href="/"
                  className={link === "Get in Touch" ? "touch-button" : ""}
                >
                  {link.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero">
          <h3>SOFTWARE DEVELOPMENT SERVICES FOR YOUR INNOVATIVE IDEAS</h3>
          <p>
            We help our partners accelerate disruption both within their
            organizations and industries. They strategize new ideas and obtain
            real business value by getting the most out of our production-ready
            custom software development services. Talk to our experts today!
          </p>
          <button>GET IN TOUCH</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
