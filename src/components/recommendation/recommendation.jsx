import React, { useState, useEffect } from "react";
import "./recommendation.scss";
import Weather from "./weather";
import Music from "./music";

const Recommendation = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const loadItems = () => {
      fetch("./playlist.json")
        .then((response) => response.json())
        .then((data) => {
          setItems(data.playlist[0].list1);
        });
    };
    loadItems();
  }, []);

  return (
    <div className="recommendation-warp">
      <span className="title">비오는 날 추천 음악</span>
      <div className="recommendation">
        <Weather />
        <div className="playlist">
          {items.map((item) => (
            <Music
              key={item.id}
              cover={item.cover}
              title={item.title}
              artist={item.artist}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
