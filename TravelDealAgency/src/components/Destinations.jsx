import "./Destinations.css";
import { FaLocationDot } from "react-icons/fa6";

function Destinations() {
  const destinations = [
    {
      name: "New York City",
      location: "New York, USA",
      image:
        "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Las Vegas",
      location: "Nevada, USA",
      image:
        "https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Miami",
      location: "Florida, USA",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Orlando",
      location: "Florida, USA",
      image:
        "https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="destinations-section" id="destinations">

      <div className="section-heading">
        <p>WHERE TRAVELERS ARE GOING</p>

        <h2>Popular Destinations</h2>

        <span>
          Explore popular destinations and find the right travel options
          for your next trip.
        </span>
      </div>

      <div className="destinations-container">
        {destinations.map((destination) => (
          <div
            className="destination-card"
            key={destination.name}
          >
            <img
              src={destination.image}
              alt={destination.name}
            />

            <div className="destination-info">
              <h3>{destination.name}</h3>

              <p>
                <FaLocationDot /> {destination.location}
              </p>

              <button>Call Now</button>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Destinations;