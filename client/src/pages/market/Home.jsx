import { useEffect, useState } from "react";
import axios from "axios";
function Home() {
  const [data, setData] = useState([]);

  async function fetchdata() {
    const response = await axios.get("/api/market");
    console.log(response.data.data);
    setData(response.data.data);
  }
  useEffect(() => {
    fetchdata();
    console.log("calling");
  }, []);
  return <div>Home {data}</div>;
}
export default Home;
