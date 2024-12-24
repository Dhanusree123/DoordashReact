import Header from './Doordash/Header.jsx';
import Section2 from './Doordash/Section2.jsx';
import Section3 from './Doordash/Section3.jsx';
import Delivery from './assets/delivery.jpg';
import Home from './assets/homepic.avif';
import Mobile from './assets/phonepic.jpg';
import Section4 from './Doordash/Section4.jsx';
import Section5 from './Doordash/Section5.jsx';
import Section6 from './Doordash/Section6.jsx';
import TodoGifts from "./components/TodoGifts";
import DeliveryImage from "./assets/Delivery_p.jpg";
import FlowersImage from "./assets/flowers.jpg";
import WineImage from "./assets/wine.jpg";
import PetImage from "./assets/Pet.webp";
import Opportunity from "./components/Opportunity";
import Grow from "./components/Grow";
import Footer from "./components/Footer";




const hValues = [
  { cname:"delivery",imgSrc: Delivery, heading: "Become a Dasher", buttons: "Start earning", paragraph: "As a delivery driver, make money and work on your schedule. Sign up in minutes.", width: 90, height: 90},
  { cname: "home",imgSrc: Home, heading: "Become a Merchant", buttons: "Sign up for DoorDash", paragraph: "Attract new customers and grow sales, starting with 0% commissions for up to 30 days.", width: 90, height: 90},
  { cname: "phone",imgSrc: Mobile, heading: "Get the best DoorDash experience", buttons: "Get the app", paragraph: "Experience the best your neighborhood has to offer, all in one app.", width: 60, height: 90,},
]

function App(){

  const todoGift = [
    {
      images: DeliveryImage,
      helpingHeading: "Return packages from home",
      helpingParagraph:
        "Request a package pickup with just a few taps and get your returns dropped off at carriers like UPS, FedEx, and USPS.",
      helpingButton: "Try Package Pickup",
    },
    {
      images: FlowersImage,
      helpingHeading: "Flowers for any occasion",
      helpingParagraph:
        "Shop hand-picked and thoughtfully-arranged blooms from florists near you.",
      helpingButton: "Send Flowers",
    },
    {
      images: WineImage,
      helpingHeading: "Restock the minibar",
      helpingParagraph:
        "Hosting a get-together or need or need a special cocktail ingredient? Get liquor, beer, mixers, champagne and wine delivered fast.*",
      helpingButton: "Shop Alcohol",
    },
    {
      images: PetImage,
      helpingHeading: "What your pets need, and want",
      helpingParagraph:
        "Finally, something cat people and dog people agree on — pet supplies delivery. Shop pet food, chew toys, and even costumes.",
      helpingButton: "Get Pet Supplies",
    },
  ];


  return(<>
    <Header />;
    
    {hValues.map((hval) => (
      <Section2
      key = {hval.heading}
      cnames = {hval.cname}
      images = {hval.imgSrc}
      head = {hval.heading}
      para = {hval.paragraph}
      hbutton = {hval.buttons}
      hwidth = {hval.width}
      hheight = {hval.height}
    />
    ))}

    <Section3 />
    <Section4 />
    <Section5 />
    <Section6 />

    <div className="helping">
        <h1 className="helpingSection">
          Helping you with to-dos and <br />
          gifting
        </h1>
        <div className="helpingSectionCard">
          {todoGift.map((item) => (
            <TodoGifts
              key={item.helpingHeading}
              images={item.images}
              helpingHeading={item.helpingHeading}
              helpingParagraph={item.helpingParagraph}
              helpingButton={item.helpingButton}
            />
          ))}
        </div>
      </div>

      <Opportunity
        Images="src\assets\img7.avif"
        opportunityHeading="Sign up to dash and get paid"
        opportunityParagraph="Deliver with one of the best Food and Drink apps in Australia. As a delivery driver, you'll make money and work on your schedule. Sign up in minutes."
        opportunityButton="Become a Dasher"
      />

      <Grow
        Images="src\assets\img8.avif"
        GrowHeading="Grow your business with DoorDash"
        GrowParagraph="Businesses large and small partner with DoorDash to reach new customers, increase order volume, and drive more sales."
        GrowButton="Become a Partner"
      />

      <Footer />
    
  </>);
}  
export default App