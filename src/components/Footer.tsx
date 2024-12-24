function Footer() {
  const popularCategories = [
    "Alcohol Australia",
    "Alcohol Delivery Australia",
    "Back To School Delivery",
    "Beauty Stores",
    "Beauty Supply",
    "Catering Near Me",
    "Chips Ahoy Big Cookie",
  ];
  const popularCategories1 = [
    "Convenience Stores Canada",
    "Dashmart Near Me",
    "Deck The Doorstep",
    "Diageo Holiday",
    "Drugstores Canada",
    "Flower Delivery",
    "Grocery Delivery Canada",
  ];
  const popularCategories2 = [
    "Haleon Well Within Reach",
    "Halloween",
    "Holiday Hosting",
    "Hsa Bank",
    "Hsa Fsa Store",
    "Large Group Orders",
    "Medicine Delivery",
  ];
  const popularCategories3 = [
    "Mothers Day",
    "Pet Store Near Me",
    "Retail Stores Near Me",
    "Seasonal Holidays",
    "Snap Ebt",
    "Valentines Day",
    "Winter Holidays",
  ];

  const listItems = popularCategories.map((a) => (
    <li key={a} className="pt-1">
      {a}
    </li>
  ));
  const listItems1 = popularCategories1.map((a) => (
    <li key={a} className="pt-1">
      {a}
    </li>
  ));
  const listItems2 = popularCategories2.map((a) => (
    <li key={a} className="pt-1">
      {a}
    </li>
  ));
  const listItems3 = popularCategories3.map((a) => (
    <li key={a} className="pt-1">
      {a}
    </li>
  ));

  return (
    <>
      <div className="mainFooter pt-5">
        <p className="footerHead fw-bold text-white">Popular Categories</p>
        <div className="footerCard mr-5">
          <div className="footerSmallCard">
            <ul>{listItems}</ul>
          </div>
          <div className="footerSmallCard">
            <ul>{listItems1}</ul>
          </div>
          <div className="footerSmallCard">
            <ul>{listItems2}</ul>
          </div>
          <div className="footerSmallCard">
            <ul>{listItems3}</ul>
          </div>
        </div>

        <div className="main_footer_card">
          <div className="footer_card">
            <p className="footer_para1">Get to Know Us</p>
            <span>About Us</span>
            <span>Careers</span>
            <span>Investors</span>
            <span>Company Blog</span>
            <span>Engineering Blog</span>
            <span>Merchant Blog</span>
            <span>Gift Cards</span>
            <span>Package Pickup</span>
            <span>Promotions</span>
            <span>Dasher Central</span>
            <span>LinkedIn</span>
            <span>Glassdoor</span>
            <span>Accessibility</span>
            <span>Newsroom</span>
          </div>
          <div className="footer_card">
            <p className="footer_para1">Let Us Help You</p>
            <span>Account Details</span>
            <span>Order History</span>
            <span>Help</span>
          </div>
          <div className="footer_card">
            <p className="footer_para1">Doing Business</p>
            <span>Become a Dasher</span>
            <span>List Your Business</span>
            <span>Get Dashers for Deliveries</span>
            <span>Get DoorDash for Business</span>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
