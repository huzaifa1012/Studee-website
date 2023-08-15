import React, { useEffect, useState } from "react";
import axios from "axios";
import SecondHero from "../component/university component/secondHero";
import Unicards from "../component/university component/unicards";
import { animateScroll } from "react-scroll";

const Universities = () => {
  const [loading, setLoading] = useState(true);
  const [uniData, setUniData] = useState("");

  useEffect(() => {
    animateScroll.scrollToTop();

    fetchAllUni();
  }, []);

  const fetchAllUni = async () => {
    try {
      const response = await axios.post(
        `https://studyapi.ieodkv.com/search/universities`,
        {
          account: false,
          accountId: "",
          Searchparameters: [],
        }
      );
      setUniData(response.data);
      console.log("All Unis", response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching from ALL UNIS:", error);
    }
  };

  return (
    <>
      <SecondHero />
      {!loading ? (
        <Unicards data={uniData} />
      ) : (
        <>
          <div className="my-custom-spinner-wrap">
            <div
              className="my-custom-spinner  inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-success motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            ></div>
          </div>
        </>
      )}
    </>
  );
};
export default Universities;
