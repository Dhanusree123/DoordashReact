import Header from './Doordash/Header.jsx';
import Section2 from './Doordash/Section2.jsx';
import Section3 from './Doordash/Section3.jsx';
import Delivery from './assets/delivery.jpg';
import Home from './assets/homepic.avif';
import Mobile from './assets/phonepic.jpg';
import Section4 from './Doordash/Section4.jsx';
import Section5 from './Doordash/Section5.jsx';
import Section6 from './Doordash/Section6.jsx';



const hValues = [
  { cname:"delivery",imgSrc: Delivery, heading: "Become a Dasher", buttons: "Start earning", paragraph: "As a delivery driver, make money and work on your schedule. Sign up in minutes.", width: 90, height: 90},
  { cname: "home",imgSrc: Home, heading: "Become a Merchant", buttons: "Sign up for DoorDash", paragraph: "Attract new customers and grow sales, starting with 0% commissions for up to 30 days.", width: 90, height: 90},
  { cname: "phone",imgSrc: Mobile, heading: "Get the best DoorDash experience", buttons: "Get the app", paragraph: "Experience the best your neighborhood has to offer, all in one app.", width: 60, height: 90,},
]

function App(){

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
  </>);
}  
export default App