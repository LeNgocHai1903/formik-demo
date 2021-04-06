import Contact from "./pages/Contact/Contact";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
