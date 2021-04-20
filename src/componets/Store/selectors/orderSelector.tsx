import { AppStateType } from "../store";

export const orderSelector = (state: AppStateType) => {
  return state.order.data;
};
export const filteSelector = (state: AppStateType) => {
  return state.order.filterData;
};
export const showMenuSelector = (state: AppStateType) => {
  return state.order.showSideBar;
};
