import { motion } from "framer-motion";
import "./Home.css";

export default function Home() {
  return (
    <section className="luxHero">
      {/* Decorative Lines */}
      <div className="luxLine topLine"></div>
      <div className="luxLine sideLine"></div>

      {/* LEFT */}
      <motion.div
        className="luxLeft"
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="luxIssue">MY PORTFOLIO</p>

        <h1 className="luxTitle">
          Where Vision <br />
          Meets <span>Elegance</span>
        </h1>

        <p className="luxDesc">
          I design elevated digital experiences where intelligence,
          aesthetics, and engineering merge into timeless products.
        </p>

        <div className="luxActions">
          <button className="luxPrimary">Explore Work</button>
          <button className="luxGhost">Contact</button>
        </div>

        <div className="luxMeta">
          <div>
            <h3>AI</h3>
            <p>Creative Systems</p>
          </div>

          <div>
            <h3>ML</h3>
            <p>Smart Products</p>
          </div>

          <div>
            <h3>UX</h3>
            <p>Luxury Design</p>
          </div>
        </div>
      </motion.div>

      {/* RIGHT */}
      <motion.div
        className="luxRight"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.1 }}
      >
        <div className="goldGlow"></div>

        <div className="imageWrap">
          <img src="/PROFILE.jpg" alt="Samriti Sharma" className="heroImg" />
        </div>

        <div className="floatingNote">
          <p className="noteTag">FEATURE PROFILE</p>
          <h1>Samriti Sharma</h1>
          <span>AI Developer · Designer · Creator</span>
        </div>
      </motion.div>
    </section>
  );
}