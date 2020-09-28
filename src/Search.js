import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <form className="Search">
      <div className="form-row">
        <div className="col-5 SearchRow">
          <input
            type="text"
            className="form-control"
            autoFocus="on"
            autoComplete="off"
          />
        </div>

        <input
          type="submit"
          className="btn btn-secondary SubmitBtn"
          value="search"
        />

        <input
          type="button"
          className="btn btn-secondary CurrentBtn"
          value="current"
        />
      </div>
    </form>
  );
}
