import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { orderSelector } from "../Store/selectors/orderSelector";
import { AppStateType } from "../Store/store";

const MealsChart = () => {
  const storeData = useSelector((state: AppStateType) => orderSelector(state));
  const [mealsCharData, setMealsCharData] = useState({});

  const meal = storeData.reduce(
    (acc: any, curr) => ({
      ...acc,
      [curr.meals]: curr.meals in acc ? [...acc[curr.meals], curr] : [curr],
    }),
    {}
  );

  const numberOfMeals = [] as Array<string>;
  const qtyOfMeals = [] as Array<number>;

  const groupMeals = () => {
    Object.entries(meal).map(([key, value]: any) => {
      numberOfMeals.push(key);
      qtyOfMeals.push(value.length);
    });
  };
  groupMeals();

  const mealsChart = () => {
    setMealsCharData({
      labels: numberOfMeals.map((item) => `Nr. of Meals ${item}`),
      datasets: [
        {
          label: "Qty of Oeders",
          data: qtyOfMeals,
          backgroundColor: [
            "rgba(252, 10, 10, 0.6)",
            "rgba(244, 252, 10, 0.7)",
            "rgba(75,210,110,.7)",
          ],
        },
      ],
      options: {
        responsive: true,
      },
    });
  };

  useEffect(() => {
    mealsChart();
  }, []);

  return (
    <div className="meals_chart">
      <Doughnut data={mealsCharData} />
    </div>
  );
};

export default MealsChart;
