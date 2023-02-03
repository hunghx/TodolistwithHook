import React from "react";

export default function List(props) {
  const handleDelete = (idDelete) => {
    props.handleDelete(idDelete);
  };
  return (
    <table className="table table-striped text-center">
      <thead className="thead-inverse">
        <tr>
          <th>STT</th>
          <th>Content</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {props.list.map((current, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{current}</td>
              <td>
                <input
                  type="button"
                  className="btn btn-warning mx-2"
                  defaultValue="Edit"
                />
                <input
                  type="button"
                  className="btn btn-danger mx-2"
                  defaultValue="Delete"
                  onClick={() => {
                    handleDelete(index);
                  }}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
