import Header from "./components/header";
import Home  from "./components/home";
import Footer from "./components/footer";
import About from "./components/about";
import Summary from "./components/summary";
import Discuss from "./components/Frequent Question";


function App() {
  return (
    <div>
          <Header/>
          <Home/>
          <About/>
          <Summary/>
          <Discuss/>
          <Footer/>
    </div>
  );
}

export default App;
