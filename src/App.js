import React, { useState, useEffect, useCallback } from "react";
import styles from "./app.module.css";
import SearchHeader from "./components/searchHeader/SearchHeader";
import VideoDetail from "./components/videoDetail/VideoDetail";
import VideoList from "./components/VideoList/VideoList";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const search = useCallback((query) => {
    setSelectedVideo(null);

    youtube
      .search(query) //
      .then((videos) => setVideos(videos));
  }, []);

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, [youtube]);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <section className="content">
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? "list" : "grid"}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
