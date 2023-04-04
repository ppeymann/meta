import Menu from "./components/Menu";
import Navbar from "./components/Nav";

import Cal from "./components/Cal";
import Times from "./components/times";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="container mx-auto w-4/5 sm:w-2/3 ">
        <Navbar />
        <Menu />
        <Cal />
        <Times />
        <Footer />
      </div>
    </div>
  );
}

export default App;
