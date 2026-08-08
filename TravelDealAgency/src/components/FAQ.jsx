import { useState } from "react";
import "./FAQ.css";
import { FaPlus, FaMinus } from "react-icons/fa";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How can I book a hotel?",
      answer:
        "You can explore our hotel deals, choose the stay that suits you, and contact our travel team to confirm your booking.",
    },
    {
      question: "Are the hotel prices updated regularly?",
      answer:
        "Yes. Our featured deals can change regularly, so we recommend checking the latest available offer before booking.",
    },
    {
      question: "Can I cancel or change my booking?",
      answer:
        "Cancellation and change policies depend on the hotel and booking terms. Our travel team can help you understand the available options.",
    },
    {
      question: "Do you provide travel assistance?",
      answer:
        "Yes. Our travel experts are available to help with hotel choices, travel plans, and booking-related questions.",
    },
    {
      question: "How can I contact TravelDealBookings?",
      answer:
        "You can contact us through the Contact Us section or use the phone support option available on our website.",
    },
    {
      question: "Can I find deals for different destinations?",
      answer:
        "Yes. We feature travel and hotel options across popular destinations so you can find a stay that fits your trip.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-header">
        <p className="faq-label">NEED HELP?</p>

        <h2>Frequently Asked Questions</h2>

        <p className="faq-subtitle">
          Find answers to some of the most common questions about
          TravelDealBookings.
        </p>
      </div>

      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            className={`faq-item ${
              openIndex === index ? "faq-item-open" : ""
            }`}
            key={faq.question}
          >
            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
            >
              <span>{faq.question}</span>

              <span className="faq-icon">
                {openIndex === index ? <FaMinus /> : <FaPlus />}
              </span>
            </button>

            {openIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;