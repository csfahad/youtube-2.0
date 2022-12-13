import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  url: BASE_URL,
  params: { maxResults: "50" },
  headers: {
    "X-RapidAPI-Key": 'be3315f44dmsh58aa55c561fe32fp192e99jsnd58cd0c4bca6',
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
