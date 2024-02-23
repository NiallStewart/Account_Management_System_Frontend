import axios from "axios";

export const getAllCustomers = (customers) => {
  console.log("get all", customers);
  return {
    type: "customers/getAll",
    data: customers,
  };
};

export const getCustomerById = (id) => {
  return async function (dispatch, getState) {
    await axios
      .get("http://localhost:8080/customers/getCustomerById/" + id)
      .then((data) => {
        console.log(data);
        return dispatch({
          type: "customer/getById",
          data: data.data,
        });
      });
  };
};

export const deleteCustomerById = (id) => {
  return async function (dispatch, getState) {
    await axios
      .delete("http://localhost:8080/customers/deleteCustomerById/" + id)
      .then((data) => {
        console.log("delete", data);
        return dispatch(fetchAllCustomers());
      });
  };
};

export const updateCustomer = (id) => {
  return async function (dispatch, getState) {
    await axios
      .post("http://localhost:8080/customers/updateCustomer/" + id)
      .then((data) => {
        console.log(data);
      });
  };
};

export const addCustomer = (employee) => {
  if (employee) {
    return async function (dispatch, getState) {
      await axios
        .put("http://localhost:8080/customers/addCustomer", employee)
        .then((data) => {
          console.log(data);
        });
    };
  }
};

export const fetchAllCustomers = () => {
  return async function (dispatch, getState) {
    await axios
      .get("http://localhost:8080/customers/getAllCustomers")
      .then((data) => {
        console.log(data);
        return dispatch(getAllCustomers(data.data));
      });
  };
};
