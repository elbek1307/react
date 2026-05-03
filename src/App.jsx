
import Header from "./componets/header/header.jsx"; 
import Hero from "./componets/hero/hero.jsx";
import Dif from  "./componets/different/dif.jsx"
import Find from "./componets/find/find.jsx"
import Footer from "./componets/footer/fut.jsx"


//rasmlar elbek//
import img1 from "./componets/different/dif1.svg";
import img2 from "./componets/different/dif2.svg";
import img3 from "./componets/different/dif3.svg";



const datas = [
  {
    id: 1,
    url: img1,
    title: "Snappy Process",
    text: "Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms."
  },
  {
    id: 2,
    url: img2,
    title: "Affordable Prices",
    text: "We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible."
  },
  {
    id: 3,
    url: img3,
    title: "People First",
    text: "Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need."
  }
];

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Dif data = {datas} />
      <Find />
      <Footer />
    </>
  );
}

export default App;