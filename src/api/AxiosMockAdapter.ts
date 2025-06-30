import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";

export const mock = new AxiosMockAdapter(axios, {
  delayResponse: 150,
  onNoMatch: "throwException",
});
