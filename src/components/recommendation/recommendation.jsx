import React, { Component } from "react";

class Recommendation extends Component {
  render() {
    return (
      <div className="recommendation-warp">
        <span className="title">비오는 날 추천 음악</span>
        <div className="carousel-wrap">
          <button className="btn left">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="btn right">
            <i className="fas fa-chevron-right"></i>
          </button>
          <div className="recommendations">
            <div className="recommendation">
              <div className="weather">
                <i className="fas fa-cloud-rain icon"></i>
                <div className="info">
                  <span className="temperature">26°C</span>
                  <span className="state">흐리고 비</span>
                </div>
              </div>
              <div className="playlist">
                <div className="music">
                  <img
                    src="img/yerinbaek_ep.jpeg"
                    alt="album-cover"
                    className="album-cover"
                  />
                  <div className="song-info">
                    <span className="name">
                      그건 아마 우리의 잘못은 아닐거야
                    </span>
                    <span className="artist">백예린</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Recommendation;
