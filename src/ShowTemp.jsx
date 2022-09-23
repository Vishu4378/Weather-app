import React, { useState, useEffect } from "react";
import { convertToK } from "./helper";

function ShowTemp({ text, input }) {
  const [img, setImg] = useState(
    "https://cdn.discordapp.com/attachments/1020891798559789078/1021713253094653983/favpng_cartoon-weather-cloud-clip-art.png"
  );
  useEffect(() => {
    if (text.description == "haze") {
      setImg("https://cdn-icons-png.flaticon.com/512/4151/4151022.png");
    } else if (text.description == "clear sky") {
      setImg(
        "https://cdn.discordapp.com/attachments/1020891798559789078/1021708820440940584/Pngtreesunny_weather_illustration_4603556.png"
      );
    } else if (text.description == "broken clouds") {
      setImg(
        "https://cdn.discordapp.com/attachments/1020891798559789078/1021711741685608474/6Tyooj5ac.png"
      );
    } else if (text.description == "scattered clouds") {
      setImg(
        "https://cdn.discordapp.com/attachments/1020891798559789078/1021711741685608474/6Tyooj5ac.png"
      );
    } else if (text.description == "rain") {
      setImg(
        "https://cdn.discordapp.com/attachments/1020891798559789078/1021714644244647966/pngwing.com.png"
      );
    }
  }, [text, input]);

  return (
    <>
      <div className="">
        <p className="font-semibold text-center text-gray-200">{input}</p>
        {input && (
          <hr className="mx-auto mt-1 text-center text-gray-200  sm:w-36"></hr>
        )}
        <div className="flex justify-between px-3 mt-8">
          <div className="sm:w-32 sm:h-40 p-2 bg-white rounded-lg">
            <h5 className="text-sm text-gray-700">Temprature</h5>
            <div className="flex mt-2">
              {input ? (
                <p className="text-2xl sm:text-4xl font-semibold">
                  {convertToK(text.temp)}{" "}
                </p>
              ) : (
                <p className="text-2xl sm:text-4xl font-semibold">
                  {text.temp}
                </p>
              )}
              <p className="font-semibold">°C</p>
            </div>
          </div>
          <div className="flex flex-col justify-between p-3  text-center">
            <p className="text-gray-200">{text.description}</p>
            <div className="space-x-2">
              <img
                className="w-24 transition-transform hover:scale-125 "
                src={img}
              ></img>
            </div>
            <div className="flex space-x-2">
              <h5 className="text-xs text-gray-200 card-title">Humidity </h5>
              <p className="text-gray-200"> {text.humidity}%</p>
            </div>
          </div>

          <div className="sm:w-32 sm:h-40 p-2 bg-white rounded-lg">
            <div>
              <p className="text-xs font-semibold">Min Temp : </p>

              <div className="flex pl-10">
                {input ? (
                  <p className="text-lg sm:text-2xl font-semibold">
                    {convertToK(text.temp_min)}{" "}
                  </p>
                ) : (
                  <p className="text-lg sm:text-2xl font-semibold">
                    {text.temp_min}
                  </p>
                )}
                <p className="text-xs font-semibold">°C</p>
              </div>
              <p className="text-xs font-semibold">Max Temp : </p>

              <div className="flex pl-10">
                {input ? (
                  <p className="sm:text-2xl text-lg font-semibold">
                    {convertToK(text.temp_max)}{" "}
                  </p>
                ) : (
                  <p className="sm:text-2xl text-lg font-semibold">
                    {text.temp_max}
                  </p>
                )}
                <p className="text-xs font-semibold">°C</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowTemp;
