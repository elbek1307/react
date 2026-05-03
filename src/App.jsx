
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
    id: 1,  url: dif1, title: "Snappy Process", text: "Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms."
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