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

  let c = {
    g: "hey",
  };
  let d;
  d = c;
  c.g = "hello";

  console.log("hhhhkh", d.g);

  const handleClick = () => {
    setInput(city);

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c412e32f8374f6a87ce341d095a159f6`
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
      <div className="h-screen flex w-full bg-gray-200">
        <div className="bg-[#161652] border  rounded-xl m-auto border-black h-80 sm:h-96">
          <div className="sm:p-8 p-1 ">
            <div
              onSubmit={handleClick}
              className="container items-center my-2 text-center"
            >
              <h1 className="text-2xl sm:text-4xl font-semibold text-white">
                Weather In
              </h1>
              <input
                type="text"
                className="pl-5 mt-3 border rounded-2xl "
                value={city}
                placeholder="Search for a City"
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              />
              <button
                className="px-3 py-1 mx-3 mt-2 text-xs font-semibold text-white bg-red-600 rounded"
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
