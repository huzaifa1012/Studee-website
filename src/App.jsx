import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routing } from "./routes/route";
import { Navbar } from "./component/home component/navbar";
import Footer from "./component/home component/footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routing />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
