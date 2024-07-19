import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/baby/getBaby";
const REST_API_BASE_URL1 = "http://localhost:8080/baby/addBaby";

export const listBabies = () => {
    return axios.get(REST_API_BASE_URL);
}

export const addBaby = (baby) => {
    return axios.post(REST_API_BASE_URL1, baby);
}

