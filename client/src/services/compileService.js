import API from "./api";

export const executeCppCode = async (code, input) => {

  try {

    const response = await API.post("/execute", {
      code,
      input
    });

    return response.data.output;

  } catch (error) {

    return "Server Error";

  }

};