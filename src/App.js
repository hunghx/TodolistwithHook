import "./App.css";
import List from "./components/List";
import Form from "./components/Form";
import { useState } from "react";
// App  - Form
//      - List
function App() {
  const [list, setList] = useState(["ĐI HỌC", "ĐI CHƠI"]);

  return (
    <div className="App">
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-10">
            {/* Form */}
            <Form />
            {/* Form */}

            {/* List */}
            <List list={list} />
            {/* List */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
