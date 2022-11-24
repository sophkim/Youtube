import React, { useState, useEffect } from "react";
import "./App.css";
import VideoList from "./components/VideoList/VideoList";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&maxResults=25&chart=mostPopular&key=AIzaSyApsGiRyE9QLMWHC-i-5tO2l4s3bgdW7xI",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  return <VideoList videos={videos} />;
}

export default App;
