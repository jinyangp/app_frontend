import axios from "axios";

const Utils = {};
const baseUrl = "http://localhost:8080";

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
    console.log(err);
    // Make a centralised function to deal with error
  }
};

export default Utils;
