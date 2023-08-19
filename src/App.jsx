import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routing } from "./routes/route";
import { Navbar } from "./component/home component/navbar";
import Footer from "./component/home component/footer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserId } from "./store/userIdSlice";
import axios from "axios";

function App() {
  const userId = localStorage.getItem("id");
  const REDUC_Id = useSelector((state) => state.userId);

  const dispatch = useDispatch();
  const [data, setData] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await axios.get(
      `https://studyapi.ieodkv.com/students/${REDUC_Id ? REDUC_Id : userId}`
    );
    setData(response.data);
    console.log(data);
  };

  useEffect(() => {
    if (userId) dispatch(setUserId(userId));
  }, []);
  return (
    <>
      <BrowserRouter>
        <Navbar profileData={data} />
        <Routing />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
