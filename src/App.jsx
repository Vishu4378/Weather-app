import React, { useState } from "react";
import axios from "axios";
import ShowTemp from "./ShowTemp";

function App() {
  const [city, setCity] = useState("");
  const [input, setInput] = useState("");
  const [data, setData] = useState({
    description: "",
    temp: 0,
    temp_max: 0,
    temp_min: 0,
    humidity: 0,
    sunrise: 0,
    sunset: 0,
    country: "",
  });

  const handleClick = () => {
    setInput(city);

    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c412e32f8374f6a87ce341d095a159f6`
      )
      .then((response) => {
        console.log(response);
        setData({
          description: response.data.weather[0].description,
          temp: response.data.main.temp,
          temp_max: response.data.main.temp_max,
          temp_min: response.data.main.temp_min,
          humidity: response.data.main.humidity,
          sunrise: response.data.sys.sunrise,
          sunset: response.data.sys.sunset,
          country: response.data.sys.country,
        });
      });
  };

  return (
    <>
      <div className="bg-gray-200 h-screen pt-20">
        <div className="bg-[#161652] border w-2/5 rounded-xl m-auto border-black  h-96">
          <div className="p-4">
            <div
              onSubmit={handleClick}
              className="container  my-2 text-center  items-center"
            >
              <h1 className="font-semibold text-4xl text-white">Weather In</h1>
              <input
                type="text"
                className="border rounded-2xl pl-5 mt-3 "
                value={city}
                placeholder="Search for a City"
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              />
              <button
                className="bg-red-600 text-xs text-white font-semibold mt-2 px-3 py-1 mx-3 rounded"
                type="submit"
                onClick={handleClick}
              >
                GET DETAIL
              </button>
            </div>
            <ShowTemp text={data} input={input}></ShowTemp>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
