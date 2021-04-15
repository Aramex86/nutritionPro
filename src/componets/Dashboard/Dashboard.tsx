import React from "react";
import { useSelector } from "react-redux";
import { orderSelector } from "../Store/selectors/orderSelector";
import { AppStateType } from "../Store/store";

const Dashboard = () => {
  const data = useSelector((state: AppStateType) => orderSelector(state));

  const meal = data.reduce(
    (acc: any, curr) => ({
      ...acc,
      [curr.meals]: curr.meals in acc ? [...acc[curr.meals], curr] : [curr],
    }),
    {}
  );

  const groupMeals = Object.entries(meal).map(([key, value]: any) => (
    <div key={key}>
      <div className="meals__nr">Nr. of Meals - <span>{key}</span> : Qty - <span>{value.length}</span></div>
    </div>
  ));

  const unpaid = data.filter(({ invoice }) => !invoice);

  const totalOrderDate = data.find(({ date }) => date === "1/31/2021");

  return (
    <section className="dash__wrapp">
      <div className="dash__top">
        <div className="meals">
          <h2>Meals</h2>
          <div className="group__meals__wrapp">{groupMeals}</div>
        </div>
        <div className="invoice">
          <h2>Invoice Unpaid</h2>
          <div>
            <span>{unpaid.length}</span>
          </div>
        </div>
        <div className="totalOrderDate">
          <h2> Tolal Order Date</h2>
          <ul className="order__list">
            <li className="order__item">{totalOrderDate?.date}</li>
            <li className="order__item">{totalOrderDate?.firstNameLastName}</li>
            <li className="order__item">
              <div> Tolal order: {totalOrderDate?.meals}</div>
            </li>
          </ul>
        </div>
      </div>
      <div className="dash__bottom">
        <div>Chart</div>
      </div>
    </section>
  );
};

export default Dashboard;
