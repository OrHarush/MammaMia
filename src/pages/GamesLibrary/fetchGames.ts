import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
  headers: {
    'X-RapidAPI-Key': '0656b91502msh34af51a830c4358p1fa9b6jsne6dd870da903',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
  },
};

export const getGames = async (parseData: (data) => void) => {
  try {
    const response = await axios.request(options);
    parseData(response.data);
  } catch (error) {
    console.error(error);
  }
};
