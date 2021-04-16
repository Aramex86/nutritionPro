import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { orderSelector } from "../Store/selectors/orderSelector";
import { AppStateType } from "../Store/store";

const Charts = () => {
  const storeData = useSelector((state: AppStateType) => orderSelector(state));
  const [charData, setCharData] = useState({});



  const arrDates=[] as Array<string>
  const arrOrders=[] as Array<number>

  storeData.map(({date})=> arrDates.push(date.slice(2)));
  storeData.map(({meals})=> arrOrders.push(meals));


  const chart = () => {
    setCharData({
      labels: arrDates,
      datasets: [
        {
          label: "Qty of Oeders",
          data:arrOrders,
          backgroundColor: ["rgba(81,211,149,.7)"],
        },
      ],
    });
  };
  useEffect(() => {
    chart();
  }, []);

  return (
    <div className='line__chartwrapp'>
      <h2>Orders on Date's</h2>
      <Line data={charData} options={{responsive:true}}/>
    </div>
  );
};

export default Charts;
