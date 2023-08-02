const axios = require('axios');

const  BASE_URL = "https://youtube138.p.rapidapi.com";
const options = {
    //   method: 'GET',
    //   url: `${BASE_URL}/auto-complete/`,
  params: {
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'X-RapidAPI-Key':process.env.REACT_APP_YOUTUBE_API_KEY ,
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

export const fetchDataFromApi = async (url)=>{//url=path
    try {
        	const {data} = await axios.get(`${BASE_URL}/${url}`,options);
        	// console.log(response.data);
            return data;
        } catch (error) {
        	console.error("error",error);
        }
}

// i will use at context
// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }