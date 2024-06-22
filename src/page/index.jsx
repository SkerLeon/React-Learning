import { useState } from "react";
import Edit from "../components/Edit";
import List from "../components/List";
import "../style/index.css";

// const style = {
//     color:"red",
//     fontSize:"30px"
// }
//<div style:{style}/>可以使用這種方式寫入CSS

const Home = () => {
  const [data, setData] = useState([]);

  return (
    <div className="app">
      <Edit add={setData} />
      <List listData={data} deleteData={setData} />
    </div>
  );
};

export default Home;
