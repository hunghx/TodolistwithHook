import React, { useState } from "react";

export default function Form(props) {
  const [newwork, setNewWork] = useState("");
  const handleChange = (e) => {
    setNewWork(e.target.value.toLowerCase());
  };
  const checkValidate = () => {
    if (newwork.trim() === "") {
      alert("Không được để trống");
      return false;
    } else {
      const isExist = props.list.includes(newwork);
      if (isExist) {
        alert("Công việc đã tồn tại ");
        return false;
      }
    }
    return true;
  };
  const handleSubmit = (e) => {
    if (checkValidate()) {
      props.receiveData(newwork);
      setNewWork("");
    }
  };
  return (
    <form className="form-inline justify-content-center my-3">
      <div className="form-group gap-3">
        <label htmlFor="work">Work</label>
        <input
          type="text"
          name=""
          value={newwork}
          id="work"
          className="form-control mx-2"
          placeholder="newwork"
          aria-describedby="helpId"
          onChange={handleChange}
        />
        <input
          className="btn btn-info mx-2"
          type="button"
          defaultValue="Add"
          onClick={handleSubmit}
        />
      </div>
    </form>
  );
}
