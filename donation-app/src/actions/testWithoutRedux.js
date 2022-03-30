import axios from "axios";

//Without redux method
export const getAll = async () => {
  const response = await axios.get(
    "http://localhost:5000/api/DonationCandidate/"
  );
  return response.data;
};
