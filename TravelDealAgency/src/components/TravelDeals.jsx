import "./TravelDeals.css";

function TravelDeals() {
  const deals = [
    {
      title: "New York Getaway",
      description: "Hotel stay + city experience",
      price: "$299",
      discount: "20% OFF",
      image:
        "https://images.unsplash.com/photo-1496588152823-86ff7695e68f?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Miami Beach Escape",
      description: "Beach resort + breakfast included",
      price: "$249",
      discount: "25% OFF",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Las Vegas Weekend",
      description: "Luxury hotel + entertainment",
      price: "$349",
      discount: "15% OFF",
      image:
        "https://images.unsplash.com/photo-1514894780887-121968d00567?auto=format&fit=crop&w=900&q=80",
    },
  ];

  return (
    <section className="travel-deals" id="travel-deals">
      <div className="deals-heading">
        <p>EXCLUSIVE OFFERS</p>

        <h2>Best Travel Deals</h2>

        <span>
          Save more on your next adventure with our exclusive travel offers.
        </span>
      </div>

      <div className="deals-container">
        {deals.map((deal) => (
          <div className="deal-card" key={deal.title}>
            <div className="deal-image">
              <img src={deal.image} alt={deal.title} />

              <span className="discount">{deal.discount}</span>
            </div>

            <div className="deal-info">
              <h3>{deal.title}</h3>

              <p>{deal.description}</p>

              <div className="deal-bottom">
                <div>
                  <small>Starting from</small>
                  <strong>{deal.price}</strong>
                </div>

                <button>View Deal</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TravelDeals;