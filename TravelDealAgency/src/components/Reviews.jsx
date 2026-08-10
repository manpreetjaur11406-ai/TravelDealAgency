import "./Reviews.css";
import {
  FaStar,
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

function Reviews() {
  const reviews = [
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      rating: 5,
      review:
        "The booking process was simple and smooth. I found a great hotel at an amazing price!",
    },
    {
      name: "Michael Brown",
      location: "Miami, USA",
      rating: 5,
      review:
        "Great travel deals and excellent hotel options. The whole experience was comfortable and easy.",
    },
    {
      name: "Emily Davis",
      location: "Las Vegas, USA",
      rating: 4,
      review:
        "Very helpful service and good prices. I would definitely use TravelDealBookings again.",
    },
  ];

  const scroll = (direction) => {
    const container =
      document.querySelector(".reviews-container");

    if (container) {
      container.scrollBy({
        left: direction === "left" ? -450 : 450,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="reviews-section">

      <div className="reviews-header">

        <p className="reviews-label">
          TRAVELER REVIEWS
        </p>

        <h2>What Our Travelers Say</h2>

        <p className="reviews-subtitle">
          Real experiences from travelers who booked
          their journey with us.
        </p>

      </div>


      <div className="reviews-carousel-wrapper">

        <button
          className="review-arrow left"
          onClick={() => scroll("left")}
        >
          <FaChevronLeft />
        </button>


        <div className="reviews-container">

          {reviews.map((review) => (

            <div
              className="review-card"
              key={review.name}
            >

              <div className="quote-icon">
                <FaQuoteLeft />
              </div>


              <div className="review-stars">

                {Array.from({
                  length: review.rating,
                }).map((_, index) => (
                  <FaStar key={index} />
                ))}

              </div>


              <p className="review-text">
                "{review.review}"
              </p>


              <div className="review-user">

                <div className="user-avatar">
                  {review.name.charAt(0)}
                </div>

                <div>
                  <h3>{review.name}</h3>
                  <p>{review.location}</p>
                </div>

              </div>

            </div>

          ))}

        </div>


        <button
          className="review-arrow right"
          onClick={() => scroll("right")}
        >
          <FaChevronRight />
        </button>

      </div>


      <div className="review-dots">
        <span className="active-dot"></span>
        <span></span>
        <span></span>
      </div>

    </section>
  );
}

export default Reviews;