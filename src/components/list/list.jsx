import React, { Component } from "react";
import "./list.scss";

class List extends Component {
  render() {
    return (
      <div className="music">
        <span className="list">전체(1,234)</span>
        <div className="playlist-wrap">
          <div className="platlist">
            <img src="img/summer.jpeg" alt="platlist-cover" className="cover" />
            <div className="info">
              <span className="title">선선한 초여름의 낭만을 느끼며</span>
              <div className="category">
                <span className="filter">#여름</span>
                <span className="filter">#화창한 날</span>
              </div>
              <div className="songs">
                <i className="fas fa-compact-disc"></i>
                <span className="count">30곡</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default List;
