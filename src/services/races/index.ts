import axios from 'axios';

const endpoints = {
  schedule: 'https://ergast.com/api/f1/current.json',
};

export const getRacesSchedule = async () => {
  const response = await axios.get(endpoints.schedule);
  return response;
};