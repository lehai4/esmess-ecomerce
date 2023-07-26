import axios from "axios";
import {
  getProductStart,
  getProductSuccess,
  getProductFailure,
} from "./productSlice";
import {
  getCategoryFailure,
  getCategoryStart,
  getCategorySuccess,
} from "./categorySlice";

export const getAllProduct = async (dispatch: any) => {
  dispatch(getProductStart());
  try {
    const res: any = await axios({
      method: "GET",
      url: `http://localhost:8080/v1/products`,
      headers: {
        credentials: "include",
        withCredentials: true,
        "Content-Type": "application/json",
      },
    });
    dispatch(getProductSuccess(res.data));
  } catch (e) {
    dispatch(getProductFailure());
  }
};
export const getCategory = async (dispatch: any) => {
  dispatch(getCategoryStart());
  try {
    const res: any = await axios({
      method: "GET",
      url: `http://localhost:8080/v1/category`,
      headers: {
        credentials: "include",
        withCredentials: true,
        "Content-Type": "application/json",
      },
    });
    dispatch(getCategorySuccess(res.data));
  } catch (e) {
    dispatch(getCategoryFailure());
  }
};
