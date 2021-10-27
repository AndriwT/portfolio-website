const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-connect">
        <h6>Let's connect!</h6>
        <ul>
          <li>
            <a
              style={{ cursor: "pointer", color: "#95C623" }}
              onClick={() =>
                window.open("https://github.com/AndriwT", "_blank")
              }
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              style={{ cursor: "pointer", color: "#95C623" }}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/andriwtapanes/",
                  "_blank"
                )
              }
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-copyright">
        <span>2021 Andriw Tapanes</span>
      </div>
    </div>
  );
};

export default Footer;
