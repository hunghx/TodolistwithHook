import React from "react";

export default function Form() {
  return (
    <form className="form-inline justify-content-center my-3">
      <div className="form-group gap-3">
        <label htmlFor="work">Work</label>
        <input
          type="text"
          name=""
          id="work"
          className="form-control mx-2"
          placeholder="newwork"
          aria-describedby="helpId"
        />
        <input className="btn btn-info mx-2" type="button" defaultValue="Add" />
      </div>
    </form>
  );
}
