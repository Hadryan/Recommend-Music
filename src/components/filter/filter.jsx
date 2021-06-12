import React, { Component } from "react";
import "./filter.scss";

class Filter extends Component {
  render() {
    return (
      <div class="category">
        <span class="title">날씨에 맞는 추천 음악</span>
        <div class="filter-wrap">
          <button class="filter">봄</button>
          <button class="filter">여름</button>
          <button class="filter">가을</button>
          <button class="filter">겨울</button>
          <button class="filter">아침</button>
          <button class="filter">오후</button>
          <button class="filter">저녁</button>
          <button class="filter">밤/새벽</button>
          <button class="filter">화창한 날</button>
          <button class="filter">비/ 흐림</button>
          <button class="filter">크리스마스</button>
          <button class="filter">환절기</button>
          <button class="filter">눈오는 날</button>
          <button class="filter">
            비온 후<br />/ 맑게 갠
          </button>
          <button class="filter">
            미세먼지
            <br />/ 황사
          </button>
          <button class="filter">선선한 날</button>
          <button class="filter">쌀쌀한 날</button>
          <button class="filter">폭염/ 더위</button>
        </div>
      </div>
    );
  }
}

export default Filter;
