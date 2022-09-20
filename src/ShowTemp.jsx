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
        <p className="text-center text-gray-200 font-semibold">{input}</p>
        {input && (
          <hr className="text-gray-200 w-36 text-center mx-auto mt-1"></hr>
        )}
        <div className="flex justify-between px-3 mt-8">
          <div className="w-32 h-40 bg-white rounded-lg p-2">
            <h5 className="text-sm text-gray-700">Temprature</h5>
            <div className="flex mt-2">
              {input ? (
                <p className="text-4xl font-semibold">
                  {convertToK(text.temp)}{" "}
                </p>
              ) : (
                <p className="text-4xl font-semibold">{text.temp}</p>
              )}
              <p className="font-semibold">°C</p>
            </div>
          </div>
          <div className="flex flex-col text-center justify-between">
            <p className="text-gray-200">{text.description}</p>
            <div>
              <img
                className="w-24 hover:scale-125 transition-transform "
                src={img}
              ></img>
            </div>
            <div className="flex space-x-2">
              <h5 className="card-title text-xs text-gray-200">Humidity </h5>
              <p className="text-gray-200"> {text.humidity}%</p>
            </div>
          </div>

          <div className="w-32 h-40 bg-white rounded-lg p-2">
            <div>
              <p className="font-semibold text-xs">Min Temp : </p>

              <div className="flex pl-10">
                {input ? (
                  <p className="text-4xl font-semibold">
                    {convertToK(text.temp_min)}{" "}
                  </p>
                ) : (
                  <p className="text-4xl font-semibold">{text.temp_min}</p>
                )}
                <p className="font-semibold text-xs">°C</p>
              </div>
              <p className="font-semibold text-xs">Max Temp : </p>

              <div className="flex pl-10">
                {input ? (
                  <p className="text-4xl font-semibold">
                    {convertToK(text.temp_max)}{" "}
                  </p>
                ) : (
                  <p className="text-4xl font-semibold">{text.temp_max}</p>
                )}
                <p className="font-semibold text-xs">°C</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowTemp;
