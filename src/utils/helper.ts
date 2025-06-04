import axios from "axios";

export const handleFetchServices = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URI}/all-service/`
    );
    const data = await response.data;

    return data;
  } catch (error) {
    console.log("first error", error);
  }
};

export const handleFetchProducts = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URI}/products/`
    );
    const data = await response.data;

    return data;
  } catch (error) {
    console.log("Error fetching Products", error);
  }
};
