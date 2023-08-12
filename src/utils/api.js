// const {axios} = require('axios');
import axios from "axios";
console.log(axios);
const  BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    //   method: 'GET',
    //   url: `${BASE_URL}/auto-complete/`,
  params: {
    hl: 'en',
    gl: 'IN'
  },
  headers: {
    'X-RapidAPI-Key':process.env.REACT_APP_YOUTUBE_API_KEY ,
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

export const fetchDataFromApi = async (url)=>{//url=path
    try {
        	const {data} = await axios.get(`${BASE_URL}${url}`,options);//.get
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

// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://youtube138.p.rapidapi.com/auto-complete/',
//   params: {
//     q: 'desp',
//     hl: 'en',
//     gl: 'US'
//   },
//   headers: {
//     'X-RapidAPI-Key': '528fe161ecmsh0d92d828d7e8f98p155741jsn8a0c416e356f',
//     'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }