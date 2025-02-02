import axios from 'axios';

const baseUrl = `${import.meta.env.VITE_BACKEND_ORIGIN}/api/persons`;

const getAll = () => axios.get(baseUrl);

const create = (newPerson) => axios.post(baseUrl, newPerson);

const update = (id, newPerson) => axios.put(`${baseUrl}/${id}`, newPerson);

const remove = (id) => axios.delete(`${baseUrl}/${id}`);

export default {
  getAll,
  create,
  update,
  remove,
};
