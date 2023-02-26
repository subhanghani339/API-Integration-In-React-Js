import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Product from "./Component/Product";

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  console.log(search);

  const getHandler = () => {
    axios
      .get(
        "https://fakestoreapi.com/products"
      )
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getHandler();
  }, []);

  return (
    <>
      <div>
        <form>
          <input
            type="text"
            name="search"
            placeholder="Search By Title"
            onChange={(e) => setSearch(e.target.value)}
            style={{ margin: "10px", width: "95%", padding: "10px" }}
          />
        </form>
      </div>
      <div className="app">
        {data.filter((item)=> {
          return search.toLowerCase() === '' ? item : item.title.toLowerCase().includes(search)
        }).map((e, i) => {
          return <Product content={e} />;
        })}
      </div>
    </>
  );
}

export default App;
