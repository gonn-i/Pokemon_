import { pokemonActions } from './pokemon-slice';
import { getList } from '../apis';

export const fetchList = () => {
  return async (dispatch) => {
    await dispatch(pokemonActions.setLoading(true));
    try {
      const requests = [];
      for (let i = 1; i <= 402; i++) {
        requests.push(getList(i));
      }

      const pokemonDataArray = await Promise.all(requests);
      await dispatch(pokemonActions.fillList({ pokemons: pokemonDataArray || [] }));
      await dispatch(pokemonActions.setLoading(false));
    } catch (error) {
      console.error('포켓몬 데이터 조회에 실패하였습니다', error);
    }
  };
};

export const fetchDetail = (id) => {
  return async (dispatch) => {
    await dispatch(pokemonActions.setLoading(true));
    try {
      const res = await getList(id);
      dispatch(pokemonActions.searchById({ pokemon: res, id }));
      await dispatch(pokemonActions.setLoading(false));
    } catch (error) {
      console.error('포켓몬 데이터 조회에 실패하였습니다', error);
    }
  };
};
