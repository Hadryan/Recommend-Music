import React, { useState, useEffect } from "react";

const Weather = () => {
  const [status, setStatus] = useState(null);
  const [temp, setTemp] = useState(null);
  const [location, setLocation] = useState(null);
  const [state, setState] = useState(null);
  const [icon, setIcon] = useState(null);
  const API_KEY = "1f8df0d58280f08cfe4b490e40aceb02";

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
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=kr&units=metric`;
            fetch(url)
              .then((response) => response.json())
              .then((data) => {
                setTemp(`${Math.round(data.main.temp)}°C`);
                setLocation(data.name);
                setState(data.weather[0].description);
                setIcon(data.weather[0].icon);
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
      <p>{status}</p>
      {icon && (
        <img
          className="icon"
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="wIcon"
        />
      )}
      <div className="info">
        <div className="tempAndLoc">
          {temp && <span className="temperature">{temp}</span>}
          {location && <span className="location">{location}</span>}
        </div>
        {state && <span className="state">{state}</span>}
      </div>
    </div>
  );
};

export default Weather;
