// App.jsx
import "./App.css";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugin after gsap import
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const tl = gsap.timeline();

    // Intro animations
    tl.fromTo (".nav",
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
    .fromTo(".title",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.5"
    )
    .fromTo(".btn",
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" },
      "start"
    );

    // Scroll animation
    gsap.fromTo(".box",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".box",
          start: "top 80%",
          end: "bottom 20%",
          scrub: true
        }
      }
    );
  }, []);

  return (
    <div>
      <div className="nav">Logo</div>
      <h1 className="title">Modern GSAP website</h1>
      <button className="btn">Explore</button>
      <div className="box">box</div>
    </div>
  );
}

export default App;