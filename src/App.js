import "./App.css";
import List from "./components/List";
import Form from "./components/Form";
import { useState } from "react";
// App  - Form
//      - List
function App() {
  const [list, setList] = useState([
    { id: "1", content: "đi học" },
    { id: "2", content: "đi ngủ" },
    { id: "3", content: "đi chơi" },
  ]);
  const [idEdit, setIdEdit] = useState("");

  const receiveData = (data) => {
    console.log({ data });
    setList((prevList) => [...prevList, data]);
  };
  const receiveEditId = (idEdit) => {
    // console.log(idEdit);
    setIdEdit(idEdit);
  };
  const handleUpdate = (data) => {
    let newArr = [];
    list.forEach((curr) => {
      if (curr.id === data.id) {
        newArr.push(data);
      } else {
        newArr.push(curr);
      }
    });
    setList(newArr);
  };
  const handleDelete = (idDel) => {
    let newList = list.filter((current, index) => current.id !== idDel);
    setList(newList);
  };
  return (
    <div className="App">
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-10">
            {/* Form */}
            <Form
              handleUpdate={handleUpdate}
              receiveData={receiveData}
              list={list}
              idEdit={idEdit}
            />
            {/* Form */}

            {/* List */}
            <List
              receiveEditId={receiveEditId}
              handleDelete={handleDelete}
              list={list}
            />
            {/* List */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
