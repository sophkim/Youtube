import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [videos, setVideos] = useState([]);
  const [name, setName] = useState("sophie");

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&maxResult=25&chart=mostPopular&key=AIzaSyApsGiRyE9QLMWHC-i-5tO2l4s3bgdW7xI",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }, []);

  return <h1> Hello</h1>;
}

export default App;
