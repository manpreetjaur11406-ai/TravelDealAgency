import "./WhyChooseUs.css";
import {
  FaMoneyBillWave,
  FaHotel,
  FaPlane,
  FaHeadset,
  FaLock,
  FaPhone,
} from "react-icons/fa";

function WhyChooseUs() {
  const features = [
    {
      icon: <FaMoneyBillWave />,
      title: "Best Travel Deals",
      description:
        "Get amazing travel offers and competitive prices for your next trip.",
    },
    {
      icon: <FaHotel />,
      title: "Quality Hotels",
      description:
        "Choose from carefully selected hotels and comfortable stays.",
    },
    {
      icon: <FaPlane />,
      title: "Easy Booking",
      description:
        "Find and plan your perfect trip with a simple and convenient process.",
    },
    {
      icon: <FaHeadset />,
      title: "Travel Experts",
      description:
        "Our travel experts are ready to help you find the right options.",
    },
    {
      icon: <FaLock />,
      title: "Safe & Trusted",
      description:
        "We focus on providing a reliable and secure travel experience.",
    },
    {
      icon: <FaPhone />,
      title: "24/7 Support",
      description:
        "Get assistance whenever you need help with your travel plans.",
    },
  ];

  return (
    <section className="why-choose-us">
      <div className="why-header">
        <p className="why-label">WHY TRAVEL WITH US?</p>

        <h2>Why Choose TravelDealBookings?</h2>

        <span>
          We make planning your next journey simple, comfortable and
          enjoyable.
        </span>
      </div>

      <div className="features-container">
        {features.map((feature) => (
          <div className="feature-card" key={feature.title}>
            <div className="feature-icon">{feature.icon}</div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;