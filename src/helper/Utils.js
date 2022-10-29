import axios from "axios";

const Utils = {};
const baseUrl = "http://localhost:8080";

const onErrorHandler = (err) => {
  // user not logged in or token given is invalid
  if (err.response.status === 403 || err.response.status === 401) {
    return { message: "Unauthenticated" };
  }

  if (err.response.status === 404) {
    return { message: "Not Found" };
  }

  // unknown error by server
  if (err.response.status === 500) {
    return { message: "Unknown error" };
  }
};

Utils.postApi = async function (endPoint, parameters = {}) {
  // Prepare the API endpoint to send request too
  const url = baseUrl + endPoint;

  try {
    // Making an API request
    const res = await axios({
      method: "POST",
      url: url,
      // headers: {
      // }
      data: parameters,
    });

    return res;
  } catch (err) {
    return onErrorHandler(err);
  }
};

Utils.getApi = async function (endPoint, parameters = {}) {
  const url = baseUrl + endPoint;

  try {
    const res = await axios.get(url, {
      params: parameters,
    });

    return res;
  } catch (err) {
    return onErrorHandler(err);
  }
};

export default Utils;
