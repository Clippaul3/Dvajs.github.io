import { normalize, schema } from "normalizr";

import shop from "../api/shop";

const products = new schema.Entity("products");

export default {
  namespace: "products",
  state: {
    result: [], 
    byId: {}
  },
  effects: {
    *query(action, { call, put }) {
      const res = yield call(shop.getProducts);
      yield put({
        type: "setProducts",
        payload: normalize(res.data, [products])
      });
    }
  },
  reducers: {
    setProducts: (state, { payload }) => {
      return {
        ...state,
        byId: payload.entities.products,
        result: payload.result
      };
    }
  }
};
