import { create } from 'apisauce';
import { CamelcaseSerializer } from 'cerealizr';

const camelSerializer = new CamelcaseSerializer();

const api = create({
  baseURL: 'https://pokeapi.co/api/v2',
  transformResponse: [(data) => camelSerializer.serialize(JSON.parse(data))],
});

export default api;
