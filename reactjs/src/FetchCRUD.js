import { useState, useEffect } from "react";
import { API } from "./config/api";

export default function FetchCRUD() {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);

  function handleChangeName(e) {
    console.log("ini data name", e.target.value);
    setName(e.target.value);
  }

  async function handleSubmit() {
    const response = await API.post("/CRUD", { name });
    console.log(response.data);
    getData();
  }

  async function handleDelete(id) {
    const response = await API.delete(`/CRUD/${id}`);
    console.log("response delete", response);
    getData();
  }

  async function getData() {
    const response = await API.get("/CRUD");
    setData(response.data);
    console.log("data fetch", response);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <input onChange={handleChangeName} />
      <button onClick={handleSubmit}>Send</button>
      {data?.map((item, i) => {
        return (
          <div key={i}>
            <h1>{item.name}</h1>
            <button
              style={{ backgroundColor: "red" }}
              onClick={() => handleDelete(item._id)}
            >
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
}
