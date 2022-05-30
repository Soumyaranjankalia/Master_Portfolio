import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import "./animation.css";
import Navbar from "./components/navbar.js";
import Header from "./components/header.js";
import About from "./components/about";
import TechStack from "./components/techstack";
import Toproject from "./components/topProject";
import Projects from "./components/project";
import Footer from "./components/footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
    setTimeout(function () {
      AOS.refresh();
    }, 500);
  }, []);
  return (
    <div id="top">
      <Navbar />
      <Header />

      <div id="about" data-aos={"fade-left"} style={{ height: "15vh" }}>
        <div className="stack-header">
          <p className="highlight">To Know</p>
          <h2 className="head">About me</h2>
        </div>
      </div>
      <About />

      <div id="tech" style={{ height: "15vh" }}></div>
      <TechStack />

      <div id="projects" style={{ height: "15vh" }}></div>
      <div>
        <div className="stack-header" data-aos={"zoom-in"}>
          <p className="highlight">My projects</p>
          <h2 className="head">Top Project</h2>
        </div>
        <div className="top_right mt" data-aos={"zoom-in-down"}>
          <Toproject
            projectdata={"Bangood Website Clone"}
            description={
              "This is a clone of a chinese E-commerce website called bangood. It includes user flow of where user select products from Men's and Womens's cloting pages, add to cart, procced to checkout, add the paymnet details and place a order. Users also can regsiter and Signin. There is also sort by functionlity included in Men's and Women's page, where users can sort hign to low and low to high."
            }
            techStack={[
              // "tech/html5.svg", "tech/css3.svg", "tech/js.svg"
              "tech/html_img.png",
              "tech/css.png",
              "tech/js.jpg",
            ]}
            imges={["landing-page.png", "mens-page.png", "cart-page.png"]}
            links={[
              "https://bangood-clone.netlify.app/",
              "https://github.com/Ankur310/Banggood-Site.git",
              // "https://player.vimeo.com/video/689858253?h=1744dc5262",
            ]}
          />
        </div>
        <div className="top_left" data-aos={"zoom-in-up"}>
          <Toproject
            projectdata={"Lybrate Website Clone"}
            description={
              "Lybrate.com innovative online doctor database gives you access to over 150,000 highly trained medical experts. So you can ask a doctor anything you want, simple with a touch of a finger. GoodKart is Lybrate’s endeavour to deliver the best of the best Health care products at your doorstep. GoodKart brings to you a vibrant mix of health products, both from reputed international brands to local Indian brands. I worked on this project during unit-4 construct week at Masai School with the help of other three team members."
            }
            techStack={[
              "tech/html_img.png",
              "tech/css.png",
              "tech/js.jpg",
              "tech/express.png",
              "tech/node.webp",
              "tech/mongo.png",
              "tech/postman.png",
            ]}
            imges={["lybrate-landing-page.png", "lybrate-product-page.png", "lybrate-cart-page.png"]}
            links={[
              "https://librate.netlify.app/",
              "https://github.com/pankajnandi/lybrateFrontend.git",
              // "https://player.vimeo.com/video/689858338?h=1e538fdf27",
            ]}
          />
        </div>

        
        {/* <div
          className="stack-header"
          style={{ marginBottom: "45px" }}
          data-aos={"fade-right"}
        >
          <p className="highlight">Mini Project's</p>
        </div>
        <div className="project_div">
          <Projects />
        </div> */}
      </div>
      <div id="contact" style={{ height: "15vh" }}></div>
      <Footer />
    </div>
  );
}

export default App;
