import SignUp from "./pages/SignUp/SignUp";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <SignUp />
      </main>
      <Footer />
    </div>
  );
}

export default App;
