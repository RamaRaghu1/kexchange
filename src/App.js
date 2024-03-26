
import { DataProvider } from "./Context/dataContext";
import Table from "./Components/Table"
import Marque from "./Components/Marque";
import Header from "./Components/Header";
import Para from "./Components/Para";
import Section from "./Components/Section"
import Faq from "./Components/Faq";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";

function App() {
  return (
    
    <div className="bg-black text-white overflow-x-clip">
 
<DataProvider >
  <Header/>
  <Marque/>
  <Hero/>
  <Para/>
  <Table/>
  <Section/>
<Faq/>
<Footer/>
</DataProvider>
</div>
);
}

export default App;
