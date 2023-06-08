import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routing } from "./routes/route";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </>
  );
}

export default App;
