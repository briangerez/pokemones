import { useQuery } from 'react-query';

import api from '../services/api';

function usePokemons({ pokemonName = '' }) {
  return useQuery(
    ['pokemon', pokemonName],
    () => api.get(`/pokemon/${pokemonName}`).then((res) => res.data),
    {
      enabled: pokemonName,
    },
  );
}

export default usePokemons;
