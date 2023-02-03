import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-10">
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
                <input
                  className="btn btn-info mx-2"
                  type="button"
                  defaultValue="Add"
                />
              </div>
            </form>
            <table className="table table-striped text-center">
              <thead className="thead-inverse">
                <tr>
                  <th>STT</th>
                  <th>Content</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Đi học lái máy bay</td>
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
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
