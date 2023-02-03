import "./App.css";
import List from "./components/List";
import Form from "./components/Form";
import { useState } from "react";
// App  - Form
//      - List
function App() {
  const [list, setList] = useState(["ĐI HỌC", "ĐI CHƠI"]);
  const receiveData = (data) => {
    setList((prevList) => [...prevList, data]);
  };
  const handleDelete = (idDel) => {
    let newList = list.filter((current, index) => index !== idDel);
    setList(newList);
  };
  return (
    <div className="App">
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-10">
            {/* Form */}
            <Form receiveData={receiveData} list={list} />
            {/* Form */}

            {/* List */}
            <List handleDelete={handleDelete} list={list} />
            {/* List */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
