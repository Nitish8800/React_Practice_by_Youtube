import React, { useEffect, useState } from "react";

const Covid = () => {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    try {
      const res = await fetch(
        "https://data.covid19india.org/v4/min/data.min.json"
      );
      const data = await res.json();
      const delhi = data.DL.delta;

      setData(delhi);
      console.log(data.DL.delta);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <h2>🔴 LIVE</h2>
      <h1>Covid-19 CORONAVIRUS TRACKER</h1>

      <ul>
        <li className="card">
          <div className="card_main">
            <div className="card_inner">
              <p className="card_total">
                <span>Our</span> Confirmed
              </p>

              <p className="card_small">{data.confirmed}</p>
            </div>
          </div>
        </li>
      </ul>
      <ul>
        <li className="card">
          <div className="card_main">
            <div className="card_inner">
              <p className="card_total">
                <span>Our</span> recovered
              </p>

              <p className="card_small">{data.recovered}</p>
            </div>
          </div>
        </li>
      </ul>
      <ul>
        <li className="card">
          <div className="card_main">
            <div className="card_inner">
              <p className="card_total">
                <span>Our</span> tested
              </p>

              <p className="card_small">{data.tested}</p>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
};

export default Covid;
