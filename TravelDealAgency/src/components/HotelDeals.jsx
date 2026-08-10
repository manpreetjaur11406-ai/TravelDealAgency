import React from "react";
import "./HotelDeals.css";
import { FaLocationDot, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const hotels = [
  {
    name: "The Sterling Grand",
    location: "New York, NY",
    rating: 5,
    price: 149,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Skyline Tower Suites",
    location: "Las Vegas, NV",
    rating: 5,
    price: 129,
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Azure Beach Resort",
    location: "Miami Beach, FL",
    rating: 4,
    price: 179,
    image:
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=900&q=80",
  },
];

function HotelDeals() {
  const scroll = (direction) => {
    const container = document.querySelector(".hotel-cards");

    if (container) {
      container.scrollBy({
        left: direction === "left" ? -400 : 400,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="hotel-deals">

      <div className="hotel-deals-heading">
        <p className="hotel-small-title">
          TODAY'S FEATURED STAYS
        </p>

        <h2>Hotel deals released daily</h2>

        <p className="hotel-subtitle">
          Rates change hourly and are confirmed by phone only.
        </p>
      </div>

      <div className="carousel-wrapper">

        <button
          className="carousel-arrow left-arrow"
          onClick={() => scroll("left")}
        >
          <FaChevronLeft />
        </button>

        <div className="hotel-cards">

          {hotels.map((hotel, index) => (
            <div className="hotel-card" key={index}>

              <div className="hotel-image-container">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                />

                <span className="best-deal">
                  BEST DEAL
                </span>
              </div>

              <div className="hotel-content">

                <div className="hotel-rating">

                  {Array.from({
                    length: hotel.rating,
                  }).map((_, index) => (
                    <FaStar key={index} />
                  ))}

                  <span className="rating-number">
                    {hotel.rating === 5 ? "4.9" : "4.8"}
                  </span>

                </div>

                <h3>{hotel.name}</h3>

                <p className="hotel-location">
                  <FaLocationDot />
                  {hotel.location}
                </p>

                <div className="hotel-bottom">

                  <div className="hotel-price">
                    ₹{hotel.price.toLocaleString("en-IN")}
                    <span>/ night</span>
                  </div>

                  <button className="view-deal">
                    View Deal
                  </button>

                </div>

              </div>
            </div>
          ))}

        </div>

        <button
          className="carousel-arrow right-arrow"
          onClick={() => scroll("right")}
        >
          <FaChevronRight />
        </button>

      </div>

      <div className="carousel-dots">
        <span className="active-dot"></span>
        <span></span>
        <span></span>
      </div>

    </section>
  );
}

export default HotelDeals;