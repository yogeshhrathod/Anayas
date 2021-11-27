import axios from "axios";

const config = {
  url: "",
  method: "",
  baseURL: "",
  transformRequest: [
    function (data, headers) {
      return data;
    },
  ],
  transformResponse: [
    function (data) {
      return data;
    },
  ],
  headers: { "X-Requested-With": "XMLHttpRequest" },
  data: "",
  timeout: 1000,
  responseType: "json",
  responseEncoding: "utf8",
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  onUploadProgress: function (progressEvent) {},
  onDownloadProgress: function (progressEvent) {},
};

axios.defaults.headers.common = { "X-Requested-With": "XMLHttpRequest" };
axios.defaults.baseURL = "";

export const api = async (method, url, data) => {
  return axios({ ...config, url: url, method, data });
};
