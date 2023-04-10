import axios from 'axios';

const endpoints = {
  racers: 'https://ergast.com/api/f1/drivers.json',
};

export const getRacers = async (limit: number, offset: number) => {
  const response = await axios.get(`${endpoints.racers}?limit=${limit}&offset=${offset}`);
  return response;
};