import React from "react";
import "./searchResult.css";
import { useNavigate } from "react-router-dom";
import { setSearchKeyword } from "../../store/searchKeywordSlice";
import { useDispatch } from "react-redux";

const SearchResults = ({ searchQuery, data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const filteredData = data.filter((item) =>
    item.showName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (searchQuery === "") {
    return null; // Don't render anything if the search query is empty
  }

  const handleNavigation = (itemUrl) => {
    navigate(itemUrl); // Use the navigate function to navigate to the specified URL
    dispatch(setSearchKeyword(""));
  };

  return (
    <div className="searchResultsStyles">
      <div className="columnStyles">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <div
              key={index}
              onClick={() => handleNavigation(item.url)}
              className="linkStyles"
            >
              {item.showName}
            </div>
          ))
        ) : (
          <div>No Match</div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
