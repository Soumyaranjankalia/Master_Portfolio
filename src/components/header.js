function Header() {
  return (
    <div className="header">
      <div className="header--div1">
        <p className="header-hi fadeLeft">Hi there </p>
        <h1 className="header--name fadeRight">Soumya Ranjan Kalia</h1>
        <h3 className="header--work fadeLeft">FULL STACK WEB DEVELOPER </h3>
        <p className="fadeRight">
          I’m a MERN stack developer
          <br />
          Focused on making creative web-apps with slick designs.<br/>
Currently converting some Words into Code.
        </p>
        <button className="btn fadeLeft">
          <a href="#contact" style={{ color: "#000" }}>
            Contact me
          </a>
        </button>
      </div>
      <div className="avtar_img zoomIn">
       
      </div>
    </div>
  );
}

export default Header;
