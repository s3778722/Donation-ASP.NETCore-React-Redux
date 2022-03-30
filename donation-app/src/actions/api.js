import axios from "axios";

const baseURL = "http://localhost:5000/api/";


/*
const fetchAllFunction = () => {
  return axios.get("http://localhost:5000/api/DonationCandidate/");
};
*/
/*
const fetchAllFunction = () =>
  (axios.get("http://localhost:5000/api/DonationCandidate/"));
*/

const api = (url = baseURL + "DonationCandidate/") => ({
  fetchAll: () => axios.get(url),
  fetchById: (id) => axios.get(url + id),
  create: (newRecord) => axios.post(url, newRecord),
  update: (id, updateRecord) => axios.put(url + id, updateRecord),
  delete: (id) => axios.delete(url + id),
});

export default api;
