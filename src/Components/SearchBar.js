import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <form>
          <label>
            Search:
            <input type="text" name="search" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </>
    );
  }
}

export default SearchBar;
