import React from "react";

const styles = {
  searchContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  searchTitle: {
    marginRight: "10px",
  },
};

const Search = ({ searchQuery }) => {
  return (
    <div style={styles.searchContainer}>
      <span style={styles.searchTitle}>Search:</span>
      <input
        type="text"
        name="search"
        onChange={(e) => searchQuery(e.target.value)}
      />
    </div>
  );
};

export default Search;
