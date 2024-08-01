import { pokemonActions } from './pokemon-slice';
import { getList } from '../apis';

export const fetchList = (i) => {
  return async (dispatch) => {
    try {
      const requests = [];
      for (let i = 1; i <= 151; i++) {
        requests.push(getList(i));
      }

      const pokemonDataArray = await Promise.all(requests);
      dispatch(pokemonActions.fillList({ pokemons: pokemonDataArray || [] }));
    } catch (error) {
      console.error('포켓몬 데이터 조회에 실패하였습니다', error);
    }
  };
};
