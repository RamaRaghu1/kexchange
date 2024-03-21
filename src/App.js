import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Section from "./Components/Section";
import Table from "./Components/Table";
import Para from "./Components/Para";
import Faq from "./Components/Faq";

function App() {
  return (
    <div className="App bg-black text-white">
      <Header/>
      <Hero/>
      <Para/>
      <Table/>
      <Section/>
      <Faq/>
      <Footer/>
    </div>
  );
}

export default App;
