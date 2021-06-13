import React, { useState, useEffect } from "react";

const Weather = () => {
  const API_KEY = "1f8df0d58280f08cfe4b490e40aceb02";
  const [status, setStatus] = useState(null);
  const [temp, setTemp] = useState(null);
  const [location, setLocation] = useState(null);
  const [state, setState] = useState(null);

  useEffect(() => {
    const getLocation = () => {
      if (!navigator.geolocation) {
        setStatus("위치 정보를 찾을 수 없습니다 🧐");
      } else {
        setStatus("잠시만요 ..🐌..");
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setStatus(null);
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
            fetch(url)
              .then((response) => response.json())
              .then((data) => {
                setTemp(`${Math.round(data.main.temp)}°C`);
                setLocation(data.name);
                setState(data.weather[0].description);
              })
              .catch((error) => console.log("error", error));
          },
          () => {
            setStatus("위치 정보 수집에 동의해 주세요 😭");
          }
        );
      }
    };
    getLocation();
  }, []);

  return (
    <div className="weather">
      <i className="fas fa-cloud-rain icon"></i>
      <div className="info">
        <div className="tempAndLoc">
          <p>{status}</p>
          {temp && <span className="temperature">{temp}</span>}
          {location && <span className="location">{location}</span>}
        </div>
        {state && <span className="state">{state}</span>}
      </div>
    </div>
  );
};

export default Weather;
