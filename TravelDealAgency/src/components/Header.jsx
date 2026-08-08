import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <span>✈</span> TravelDealBookings
      </div>

      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#destinations">Destinations</a>
        <a href="#hotels">Hotels</a>
        <a href="#deals">Deals</a>
        <a href="#reviews">Reviews</a>
        <a href="#faq">FAQ</a>
        <a href="#contact">Contact</a>
      </nav>

      <button className="header-btn">Book Now</button>
    </header>
  );
}

export default Header;