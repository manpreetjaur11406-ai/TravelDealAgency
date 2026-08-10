import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay">
        <div className="hero-content">

          <div className="hero-small-text">
            ✈ EXPLORE • DISCOVER • TRAVEL
          </div>

          <h1>
            Discover Your
            <br />
            Next Adventure
          </h1>

          <p className="hero-description">
            Find amazing destinations, beautiful hotels and
            exclusive travel deals for your next unforgettable journey.
          </p>

          <div className="hero-buttons">
            <button className="explore-btn">
              Explore Deals
            </button>

            <button className="learn-btn">
              Learn More
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;