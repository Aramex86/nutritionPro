import React  from "react";
import { Button, Table } from "antd";
import { AppStateType } from "../Store/store";
import { filteSelector, orderSelector } from "../Store/selectors/orderSelector";
import { useDispatch, useSelector } from "react-redux";
import {
  filterDate,
  filterInvoice,
  filterMeals,
  filterStartDate,
} from "../Store/redusers/orederReducer";

const { Column } = Table;

const Order = () => {
  const data = useSelector((state: AppStateType) => orderSelector(state));
  const filtersData = useSelector((state: AppStateType) =>
    filteSelector(state)
  );
  const dispatch = useDispatch();

  const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(filterDate(value));
  };
  const handleStartDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(filterStartDate(value));
  };
  const handleMeals = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(filterMeals(Number(value)));
  };

  const handleInvoice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(filterInvoice(value));
  };


  return (
    <section className="order__wrapeer">
      <Table
        dataSource={filtersData.length > 0 ? filtersData : data}
        rowKey="id"
        pagination={{
          pageSizeOptions: ["10", "25", "50"],
          showSizeChanger: true,
        }}
      >
        <Column
          title={
            <div className="column__heading">
              <span>Date</span>
              <div>
                <input type="text" placeholder="Search"  onChange={handleDate} />
              </div>
            </div>
          }
          dataIndex="date"
          key="Date"
        />
        <input type="text" />
        <Column
          title={
            <div className="column__heading">
              <span>Name</span>
            </div>
          }
          dataIndex="firstNameLastName"
          key="FirstName LastName"
        />
        <Column
          title={
            <div className="column__heading">
              <span>Phone</span>
            </div>
          }
          dataIndex="phone"
          key="Phone"
        />
        <Column
          title={
            <div className="column__heading">
              <span>Email</span>
            </div>
          }
          dataIndex="email"
          key="Email"
        />
        <Column
          title={
            <div className="column__heading">
              <span>Start date</span>
              <div>
                <input
                  type="text"
                  placeholder="Search"
                  onChange={handleStartDate}
                />
              </div>
            </div>
          }
          dataIndex="startDate"
          key="Start date"
        />
        <Column
          title={
            <div className="column__heading">
              <span>Meals</span>
              <div>
                <input
                  type="text"
                  placeholder="Search"
                  onChange={handleMeals}
                />
              </div>
            </div>
          }
          dataIndex="meals"
          key="Meals"
        />
        <Column
          title={
            <div className="column__heading">
              <span>Invoice Status</span>
              <div>
                <input
                  type="text"
                  placeholder="Search"
                  onChange={handleInvoice}
                />
              </div>
            </div>
          }
          dataIndex="invoice"
          key="id"
          render={(Invoice) => <>{Invoice ? "paid" : "unpaid"}</>}
        />
        <Column
          key="name"
          render={() => (
            <>
              <Button type="primary" className="order-btn">
                Order
              </Button>
            </>
          )}
        />
      </Table>
    </section>
  );
};

export default Order;
