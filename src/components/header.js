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
        {/* <img src={img} alt="" /> */}
        {/* <iframe
          height="300"
          // style="width: 100%;"
          scrolling="no"
          title="Untitled"
          src="https://codepen.io/shilpashingnapure/embed/abEbROq?result"
          // src="https://cdpn.io/pen/debug/abEbROq?authentication_hash=yPkJjbdKGaEk"
          frameBorder="no"
          loading="lazy"
          data-default-tab="result"
          // allowtransparency="true"
          allowFullScreen={true}
        >
          See the Pen{" "}
          <a href="https://codepen.io/shilpashingnapure/pen/abEbROq">
            Untitled
          </a>{" "}
          by Shilpa Shingnapure (
          <a href="https://codepen.io/shilpashingnapure">@shilpashingnapure</a>)
          on <a href="https://codepen.io">CodePen</a>.
        </iframe> */}
      </div>
    </div>
  );
}

export default Header;
