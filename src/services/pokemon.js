/* eslint-disable import/extensions */
import api from './api.js';

// eslint-disable-next-line import/prefer-default-export
export const getPokemon = (name) => api.get(`v2/pokemon/${name}`);
