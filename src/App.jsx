import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routing } from "./routes/route";
import { Navbar } from "./component/home component/navbar";
import Footer from "./component/home component/footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUserId } from "./store/userIdSlice";

function App() {
  const userId = localStorage.getItem("id");
  const dispatch = useDispatch();
  useEffect(() => {
    if (userId) dispatch(setUserId(userId));
  }, []);
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
