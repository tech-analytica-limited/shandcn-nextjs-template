import axios, { AxiosResponse } from "axios";

// TODO: Change the type depending on application
interface ResponseType {
  data: any | null;
  isError: boolean;
  Error: any | null;
}

const caxios = axios.create({
  baseURL: "",
});

caxios.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem(
      "accessToken"
    )}`;

    return config;
  },
  (error) => {
    // Handle request errors here, if needed
    return Promise.reject(error);
  }
);

// Add a response interceptor
caxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return error;
  }
);

const fetchData = async () => {
  try {
    const response: AxiosResponse = await caxios({
      method: "GET",
      url: "/",
    });

    const responseData: ResponseType = response.data;

    // Process the response data
  } catch (error) {
    // Handle the error
    if (axios.isAxiosError(error)) {
      // Handle Axios-specific errors

      console.error("Axios error:", error.message);
    } else {
      // Handle general errors
      //   console.error("General error:", error.message);
    }
  }
};

const postData = async () => {
  try {
    const dataToSend = { name: "John Doe", age: 25 };

    const response: AxiosResponse = await caxios.post("/", dataToSend);

    const responseData: ResponseType = response.data;

    // Process the response data
  } catch (error) {
    // Handle the error
    if (axios.isAxiosError(error)) {
      // Handle Axios-specific errors

      console.error("Axios error:", error.message);
    } else {
      // Handle general errors
      //   console.error("General error:", error.message);
    }
  }
};
