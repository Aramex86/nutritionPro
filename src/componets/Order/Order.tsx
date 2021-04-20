import React from "react";
import { Button, Table,Input } from "antd";
import { AppStateType } from "../Store/store";
import { filteSelector, orderSelector } from "../Store/selectors/orderSelector";
import { useDispatch, useSelector } from "react-redux";
import {
  filterDate,
  filterInvoice,
  filterMeals,
  filterStartDate,
} from "../Store/redusers/orederReducer";
import { DatePicker } from "antd";

const { Column } = Table;

const Order = () => {
  const data = useSelector((state: AppStateType) => orderSelector(state));
  const filtersData = useSelector((state: AppStateType) =>
    filteSelector(state)
  );
  const dispatch = useDispatch();

  const handleDate = (date: any, dateString: string) => {
    const newDate = new Intl.DateTimeFormat("en-GB").format(date);

    dispatch(filterDate(newDate));
  };
  const handleStartDate = (date: any, dateString: string) => {
    const newDate = new Intl.DateTimeFormat("en-GB").format(date);
    dispatch(filterStartDate(newDate));
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
        scroll={{ x: true }}
      >
        <Column
          title={
            <div className="column__heading">
              <span>Date</span>
              <DatePicker onChange={handleDate} size={'small'}/>
            </div>
          }
          dataIndex="date"
          key="Date"
          fixed={"left"}
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
          responsive={["md"]}
        />
        <Column
          title={
            <div className="column__heading">
              <span>Email</span>
            </div>
          }
          dataIndex="email"
          key="Email"
          responsive={['md']}
        />
        <Column
          title={
            <div className="column__heading">
              <span>Start date</span>
              <div>
                <DatePicker onChange={handleStartDate} size={'small'}/>
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
                <Input placeholder='search' onChange={handleMeals} size={'small'}/>
              </div>
            </div>
          }
          dataIndex="meals"
          key="Meals"
          width={'5%'}
        />
        <Column
          title={
            <div className="column__heading">
              <span>Invoice Status</span>
              <div>
                 <Input placeholder='search' onChange={handleInvoice} size={'small'}/>
              </div>
            </div>
          }
          dataIndex="invoice"
          key="id"
          render={(Invoice) => <>{Invoice ? "paid" : "unpaid"}</>}
          width={'20%'}
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
          width={"5%"}
        />
      </Table>
    </section>
  );
};

export default Order;
