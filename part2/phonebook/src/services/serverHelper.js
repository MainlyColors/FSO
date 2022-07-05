import axios from 'axios';

const baseURL = 'http://localhost:3001/persons';

function getAll() {
  const request = axios.get(baseURL);
  return request.then((res) => res.data);
}

function create(newObject) {
  const request = axios.post(baseURL, newObject);
  return request.then((res) => res.data);
}

export default {
  getAll,
  create,
};
