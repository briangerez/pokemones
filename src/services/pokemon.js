import api from './api';

export async function getAllPokemons() {
  try {
    const response = await api.get('pokemon?limit=1050&offset=0');
    return { status: true, data: response.data.results };
  } catch (e) {
    return { status: false, data: e.message };
  }
}

export async function getPokemon(pokemon) {
  try {
    const response = await api.get(`pokemon/${pokemon}`);
    return { status: true, data: response.data };
  } catch (e) {
    return { status: false, data: e.message };
  }
}
